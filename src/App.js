import React from "react";
import Placeholder from "./placeholder.component";
// import Timeline from "./timeline.component";
import { Github, LinkedIn } from "./socials";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Placeholder} />
        <Route exact path="/github" component={Github} />
        <Route exact path="/linkedin" component={LinkedIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
