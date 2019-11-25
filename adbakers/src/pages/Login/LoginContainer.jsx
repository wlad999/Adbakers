import React from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import { sendLoginData } from "../../redux/action/loginAction";
import { getIsAuth } from "../../redux/selectors/loginSelectots";

class LoginContainer extends React.Component {
  state = {
    login: "eve.holt@reqres.in",
    password: "cityslicka",
    error: "",
    errorLog: "",
    errorPass: ""
  };
  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });

    const regLatin = new RegExp("^[a-zA-Z0-9]+$");
    const regFirstNum = new RegExp(`^[0-9]`);
    // if (regFirstNum.test(this.state.login || this.state.login.length > 0)) {
    //   this.setState({
    //     error: "Логин не может начинаться с цифры"
    //   });
    // } else if (
    //   !regLatin.test(this.state.login || this.state.login.length > 0)
    // ) {
    //   this.setState({
    //     error: "Логин не может содержать кириллицу и спец символы"
    //   });
    // } else
    if ((this.state.login.length > 0) & (this.state.login.length < 5)) {
      this.setState({
        error: "Логин должен состоять минимум из 5 знаков"
      });
    } else if (
      (this.state.password.length > 0) &
      (this.state.password.length < 8)
    ) {
      this.setState({
        error: "Пароль должен состоять минимум из 5 знаков"
      });
    } else if ((this.state.login.length > 0) & (this.state.login.length > 16)) {
      this.setState({
        error: "Логин должен состоять максимум из 16 символов"
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
    }
  };

  redirectUser = data => {
    localStorage.setItem("userToken", data.token);
    this.props.history.push("/users");
  };

  handleLogin = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (login.length < 5 || password < 5) {
      return;
    }

    const dataToLogin = {
      email: login,
      password: password
    };

    this.props
      .sendLoginData(dataToLogin)
      .then(({ data, status }) => this.handleErrorLogin(data, status))
      .catch(error => console.log(error));
  };

  handleErrorLogin = (data, status) => {
    if (status === 200) {
      this.redirectUser(data);
    }
    if (status == undefined || !status) {
      let errorResponse =
        data.err === "User doesnt exist" && "Неправильный пароль или логин";
      errorResponse =
        data.err === "Password is invalid" && "Неправильный пароль или логин";
      this.setState({
        error: errorResponse
      });
    }
  };

  render() {
    return (
      <>
        <div className={styles.pageWrapper}>
          <div className={styles.loginWrapper}>
            <div className={styles.entry}>ВХОД / РЕГИСТРАЦИЯ</div>
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
              <div className={styles.butModule}>
                <button onClick={this.handleLogin} className={styles.button}>
                  Вход
                </button>
                <button
                  // onClick={this.handleRegister}
                  className={styles.button}
                >
                  Регистрация
                </button>
              </div>
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
