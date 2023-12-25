import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Wode from "./Wode";
import News from "./News";
import Notdefunt from "./404";
import Tabber from "./../tabber";
export default class Routerview extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Wode" component={Wode}></Route>
            <Route path="/News" component={News}></Route>
            <Redirect from="/" to="/Home" exact></Redirect>
            <Route component={Notdefunt}></Route>
          </Switch>
          <Tabber></Tabber>
        </HashRouter>
      </div>
    );
  }
}
