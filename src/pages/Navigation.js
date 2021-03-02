import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AnimePage from "./AnimePage";
import SearchPage from "./SearchPage";

function Navigation() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/anime/:id">
        <AnimePage />
      </Route>
      <Route path="/search/:type/:query">
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default Navigation;
