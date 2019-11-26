import React from "react";
import "./App.css";
import UsersContainer from "./pages/Users/UsersContainer";
import LoginContainer from "../src/pages/Login/LoginContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Route path="/users" render={props => <UsersContainer {...props} />} />
      <Route exact path="/" render={props => <LoginContainer {...props} />} />
    </div>
  );
}

export default App;
