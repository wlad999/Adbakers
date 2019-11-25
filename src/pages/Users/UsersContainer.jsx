import React from "react";
import { Redirect } from "react-router-dom";
import User from "../../components/User/User";
import { connect } from "react-redux";
import styles from "./Users.module.css";
import UsersOnPage from "./UsersOnPage";
import {
  getUserDataThunk,
  getUsersOnPageThunk,
  currentPageAC,
  setUserDataAC
} from "../../redux/action/usersAction";
import {
  getAllUsers,
  getCurrentPage,
  getTotalUsers,
  getUserData,
  getIsFetching
} from "../../redux/selectors/usersSelectots";
import { getIsAuth } from "../../redux/selectors/loginSelectots";

class UsersContainer extends React.Component {
  state = {
    showUser: false
  };
  componentDidMount() {
    this.props.getUsersOnPageThunk(this.props.currentPage);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.props.getUsersOnPageThunk(this.props.currentPage);
    }
  }

  showHideUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/"} />;
    }

    const token = localStorage.getItem("userToken");

    const {
      users,
      userData,
      currentPage,
      currentPageAC,
      totalUsers,
      getUserDataThunk,
      setUserDataAC,
      isFetching
    } = this.props;
    console.log("isFetching", isFetching);

    return (
      <div className={styles.wrapper}>
        {isFetching ? (
          <h2 className={styles.wait}>PLEASE WAIT A LITTLE BIT</h2>
        ) : (
          <UsersOnPage
            users={users}
            getUserDataThunk={getUserDataThunk}
            currentPage={currentPage}
            currentPageAC={currentPageAC}
            totalUsers={totalUsers}
            showHideUser={this.showHideUser}
          />
        )}

        {this.state.showUser && (
          <User
            showHideUser={this.showHideUser}
            userData={userData}
            setUserDataAC={setUserDataAC}
            isFetching={isFetching}
          />
        )}
      </div>
    );
  }
}
let MSTP = state => ({
  users: getAllUsers(state),
  currentPage: getCurrentPage(state),
  totalUsers: getTotalUsers(state),
  userData: getUserData(state),
  isAuth: getIsAuth(state),
  isFetching: getIsFetching(state)
});

export default connect(MSTP, {
  getUsersOnPageThunk,
  getUsersOnPageThunk,
  getUserDataThunk,
  currentPageAC,
  setUserDataAC
})(UsersContainer);
