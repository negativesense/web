import React from "react";
import Placeholder from "./placeholder.component";
// import Timeline from "./timeline.component";
import { Github, LinkedIn } from "./socials";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FriendOffer, FriendCont } from "./friends";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/github" component={Github} />
        <Route exact path="/linkedin" component={LinkedIn} />
        <Route
          exact
          path="/jason"
          component={() => <FriendOffer company="IFDS" />}
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
          path="/aaron"
          component={() => <FriendCont name="Aaron" />}
        />
        <Route component={Placeholder} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
