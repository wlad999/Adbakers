import React from "react";
import "./App.css";
import UsersContainer from "./pages/Users/UsersContainer";
import LoginContainer from "../src/pages/Login/LoginContainer";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Route
        exact
        path="/users"
        render={props => <UsersContainer {...props} />}
      />
      <Route path="/" render={props => <LoginContainer {...props} />} /> y{" "}
    </div>
  );
}

export default App;
