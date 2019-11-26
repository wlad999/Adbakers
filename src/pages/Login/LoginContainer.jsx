import React from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import { sendLoginData } from "../../redux/action/loginAction";
import { getIsAuth } from "../../redux/selectors/loginSelectots";
import LoginForm from "./loginForm";

class LoginContainer extends React.Component {
  state = {
    login: "",
    password: "",
    errorLogin: "",
    errorPassword: "",
    errorSubmit: ""
  };

  handleInputs = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("IS CHANGING");
      if (
        (this.state.login.length > 0) &
        (this.state.login.length < 8) &
        (prevState.login.length !== this.state.login.length)
      ) {
        const errLoginMinLength = "Логин должен состоять минимум из 8 знаков";
        if (this.state.errorLogin !== errLoginMinLength) {
          this.setState({
            errorLogin: errLoginMinLength,
            errorSubmit: ""
          });
        }
      } else if (
        (this.state.login.length > 18) &
        (prevState.login.length !== this.state.login.length)
      ) {
        const errLoginMinLength =
          "Логин должен состоять максимум из 18 символов";
        if (this.state.errorLogin !== errLoginMinLength) {
          this.setState({
            errorLogin: errLoginMinLength,
            errorSubmit: ""
          });
        }
      } else if (
        (this.state.login.length > 7) &
        (this.state.login.length < 19) &
        (prevState.login.length !== this.state.login.length)
      ) {
        const errLoginMinLength = "";
        if (this.state.errorLogin !== errLoginMinLength) {
          this.setState({
            errorLogin: errLoginMinLength,
            errorSubmit: ""
          });
        }
      } else if (
        (this.state.password.length > 0) &
        (this.state.password.length < 8) &
        (prevState.password.length !== this.state.password.length)
      ) {
        const errPassMinLength = "Пароль должен состоять минимум из 8 знаков";
        if (this.state.errPassMinLength !== errPassMinLength) {
          this.setState({
            errorPassword: errPassMinLength,
            errorSubmit: ""
          });
        }
      } else if (
        (this.state.password.length > 18) &
        (prevState.password.length !== this.state.password.length)
      ) {
        const errPassMinLength =
          "Пароль должен состоять максимум из 18 символов";
        if (this.state.errorPassword !== errPassMinLength) {
          this.setState({
            errorPassword: errPassMinLength,
            errorSubmit: ""
          });
        }
      } else if (
        (this.state.password.length > 7) &
        (this.state.password.length < 19) &
        (prevState.password.length !== this.state.password.length)
      ) {
        const errPassMinLength = "";
        if (this.state.errorPassword !== errPassMinLength) {
          this.setState({
            errorPassword: errPassMinLength,
            errorSubmit: ""
          });
        }
      }
    }
  }

  redirectUser = data => {
    localStorage.setItem("userToken", data.token);
    this.props.history.push("/users");
  };

  handleSubmitAuth = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (login.length === 0 || password.length === 0) {
      this.setState({ errorLogin: "Заполните Логин и Пароль" });
      return;
    }
    if (login.length < 8 || password.length < 8) {
      return;
    }
    if (login.length > 18 || password.length > 18) {
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
        errorSubmit: "Неправильный пароль или логин",
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
            <LoginForm
              state={this.state}
              handleInputs={this.handleInputs}
              handleSubmitAuth={this.handleSubmitAuth}
            />
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
