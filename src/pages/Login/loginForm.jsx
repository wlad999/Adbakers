import React from "react";
import styles from "./Login.module.css";
const LoginForm = props => {
  const { state, handleInputs, handleSubmitAuth } = props;

  return (
    <form>
      <div className={styles.inputModule}>
        <label htmlFor="login" className={styles.invisible}>
          Login
        </label>
        <input
          type="text"
          name="login"
          id="login"
          onChange={handleInputs}
          placeholder="Логин *"
          className={styles.input}
          value={state.login}
        />
        <label htmlFor="password" className={styles.invisible}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputs}
          placeholder="Пароль *"
          className={styles.input}
          value={state.password}
        />
      </div>
      <div className={styles.error}>
        <p>{state.errorLogin}</p>
        <p>{state.errorPassword}</p>
        <p>{state.errorSubmit}</p>
      </div>
      <button onClick={handleSubmitAuth} className={styles.button}>
        Вход
      </button>
    </form>
  );
};
export default LoginForm;
