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
  getUserData
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
    console.log("TOKET in localStoreg", token);

    const {
      users,
      userData,
      currentPage,
      currentPageAC,
      totalUsers,
      getUserDataThunk,
      setUserDataAC
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <UsersOnPage
            users={users}
            getUserDataThunk={getUserDataThunk}
            currentPage={currentPage}
            currentPageAC={currentPageAC}
            totalUsers={totalUsers}
            showHideUser={this.showHideUser}
          />
        </div>

        {this.state.showUser && (
          <User
            showHideUser={this.showHideUser}
            userData={userData}
            setUserDataAC={setUserDataAC}
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
  isAuth: getIsAuth(state)
});

export default connect(MSTP, {
  getUsersOnPageThunk,
  getUserDataThunk,
  currentPageAC,
  setUserDataAC
})(UsersContainer);
