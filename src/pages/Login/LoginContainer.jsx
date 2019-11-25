import React from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import { sendLoginData } from "../../redux/action/loginAction";
import { getIsAuth } from "../../redux/selectors/loginSelectots";

class LoginContainer extends React.Component {
  state = {
    login: "",
    password: "",
    error: ""
  };
  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
    setTimeout(() => {
      if ((this.state.login.length > 0) & (this.state.login.length < 8)) {
        this.setState({
          error: "Логин должен состоять минимум из 8 знаков"
        });
      } else if (
        (this.state.password.length > 0) &
        (this.state.password.length < 8)
      ) {
        this.setState({
          error: "Пароль должен состоять минимум из 8 знаков"
        });
      } else if (
        (this.state.login.length > 0) &
        (this.state.login.length > 18)
      ) {
        this.setState({
          error: "Логин должен состоять максимум из 18 символов"
        });
      } else if (
        (this.state.password.length > 0) &
        (this.state.password.length > 16)
      ) {
        this.setState({
          error: "Пароль должен состоять максимум из 16 символов"
        });
      } else {
        this.setState({
          error: ""
        });
        return;
      }
    }, 0);
  };

  redirectUser = data => {
    localStorage.setItem("userToken", data.token);
    this.props.history.push("/users");
  };

  handleLogin = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (login.length < 8 || password.length < 8) {
      return;
    }
    if (login.length > 18 || password.length > 16) {
      return;
    }

    const dataToLogin = {
      email: login,
      password: password
    };

    this.props
      .sendLoginData(dataToLogin)
      .then(resp => this.handleErrorLogin(resp))
      .catch(error => console.log(error));
  };

  handleErrorLogin = resp => {
    console.log("RESP", resp);
    if (resp === undefined) {
      this.setState({
        error: "Неправильный пароль или логин",
        login: "",
        password: ""
      });
    }
    if (resp.status === 200) {
      this.setState({ error: "" });
      this.redirectUser(resp.data);
    }
  };

  render() {
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.loginWrapper}>
            <form>
              <div className={styles.inputModule}>
                <label htmlFor="login" className={styles.invisible}>
                  Login
                </label>
                <input
                  type="text"
                  name="login"
                  id="login"
                  onChange={this.handleInputs}
                  placeholder="Логин *"
                  className={styles.input}
                  value={this.state.login}
                />
                <label htmlFor="password" className={styles.invisible}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleInputs}
                  placeholder="Пароль *"
                  className={styles.input}
                  value={this.state.password}
                />
              </div>
              <div className={styles.error}>
                <p>{this.state.error}</p>
              </div>
              <button onClick={this.handleLogin} className={styles.button}>
                Вход
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
let MSTP = state => ({
  isAuth: getIsAuth(state)
});

export default connect(MSTP, { sendLoginData })(LoginContainer);
