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
      <Route exact path="/anime/:id">
        <AnimePage />
      </Route>
      <Route exact path="/search/anime/:query">
        <SearchPage />
      </Route>
    </Switch>
  );
}

export default Navigation;