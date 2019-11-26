import React from "react";
import "./App.css";
import UsersContainer from "./pages/Users/UsersContainer";
import LoginContainer from "../src/pages/Login/LoginContainer";
import ProfUser from "../src/components/ProfUser/ProfUser";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Route path="/users" render={props => <UsersContainer {...props} />} />
      <Route path="/profile" render={props => <ProfUser {...props} />} />
      <Route exact path="/" render={props => <LoginContainer {...props} />} />
    </div>
  );
}

export default App;
