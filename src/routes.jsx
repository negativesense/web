import React from "react";

import { Github, LinkedIn } from "./socials";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  FriendOffer,
  Birthday,
  FriendOfferCrazy,
  Crazy,
  Message
} from "./friends";
import Main from "./main";
import Projects from "./projects/projects";

const RedirectHome = () => <Redirect to="/" />;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/github" component={Github} />
    <Route exact path="/linkedin" component={LinkedIn} />
    <Route exact path="/projects" component={Projects} />
    <Route
      exact
      path="/jason"
      component={() => <FriendOfferCrazy company="IFDS" />}
    />
    <Route
      exact
      path="/kevin"
      component={() => <FriendOffer company="Zyng🅰️" />}
    />
    <Route
      exact
      path="/kallen"
      component={() => <FriendOffer company="G🅾️🅾️gle" />}
    />
    <Route
      exact
      path="/keith"
      component={() => <FriendOffer company="🅱️lipp" />}
    />
    <Route
      exact
      path="/gabe"
      component={() => <FriendOffer company="M🅰️nulife" />}
    />
    <Route
      exact
      path="/wmloh"
      component={() => <FriendOffer company="Thomson Reuters" />}
    />
    <Route
      exact
      path="/anna"
      component={() => <FriendOffer company="OTPP" />}
    />
    <Route exact path="/aaron" component={() => <Birthday name="Aaron" />} />
    <Route
      exact
      path="/anson"
      component={() => <Crazy message="Welcome to Waterloo 😍" />}
    />
    <Route
      exact
      path="/karen"
      component={() => <Message message="妈咪仲唔训觉？😡" />}
    />
    <Route
      exact
      path="/nicole"
      component={() => <Message message="Happy 🅱️elated 🅱️irthday!!" />}
    />
    <Route exact path="/vlee" component={() => <Birthday name="🅱️ictor" />} />
    <Route
      exact
      path="/dpeng"
      component={() => <Message message="Your rent is due." />}
    />
    <Route component={RedirectHome} />
  </Switch>
);

export default Routes;
