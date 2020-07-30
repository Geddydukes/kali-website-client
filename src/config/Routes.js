import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bio from "../pages/Bio";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            storeUser={props.storeUser}
          />
        );
      }}
    />
    <Route path="/Bio" component={Bio} />
  </Switch>
);

export default Routes;
