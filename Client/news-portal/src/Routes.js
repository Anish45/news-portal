import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Logout from "./Logout/Logout";

const Routes = () => {
  const [authorize, setAuthorize] = useState(false);

  return (
    <Router>
      <Route>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Login setAuthorize={setAuthorize} />}
          />
          <Route exact path="/register" component={() => <Register />} />
          <Route
            exact
            path="/logout"
            component={() => <Logout setAuthorize={setAuthorize} />}
          />
          <Route
            exact
            path="/home"
            component={() => <Home authorized={authorize} />}
          />
          )
          <Redirect exact to="" />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;
