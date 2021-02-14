import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import AnimePage from "./AnimePage";
import SearchPage from "./SearchPage";

function Navigation() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/anime">
        <AnimePage />
      </Route>
      <Route exact path="/search">
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default Navigation;