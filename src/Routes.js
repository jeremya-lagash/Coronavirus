import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeContainer from "./containers/HomeContainer";
import ListContainer from "./containers/ListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/countries" component={ListContainer} />
    </Switch>
  );
};

export default Routes;
