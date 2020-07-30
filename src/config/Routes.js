import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bio from "../pages/Bio";
import Contact from "../pages/Contact";

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
    <Route exact path="/Bio" component={Bio} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
