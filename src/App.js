import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Placeholder from "./placeholder.component";
// import Timeline from "./timeline.component";
import { Github, LinkedIn } from "./socials";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  FriendOffer,
  Birthday,
  FriendOfferCrazy,
  Crazy,
  Message
} from "./friends";
import Main from "./main";
import TopBar from "./topbar";
// https://coolors.co/495867-577899-bed4ea-f7fbff-54a9ff

const themes = {
  lightTheme: {
    primary: "#495867",
    secondary: "#577899",
    light: "#bed4ea",
    background: "#f7fbff",
    bright: "#54a9ff"
  },
  darkTheme: {
    background: "#495867",
    secondary: "#577899",
    light: "#bed4ea",
    primary: "#f7fbff",
    bright: "#54a9ff"
  }
};

const Background = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }
`;

const App = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "lightTheme"
  );
  const onThemeChange = updatedTheme => {
    window.localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  };
  return (
    <ThemeProvider theme={themes[theme]}>
      <React.Fragment>
        <Background />
        <TopBar onThemeChange={onThemeChange} theme={theme} />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/linkedin" component={LinkedIn} />
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
            <Route
              exact
              path="/aaron"
              component={() => <Birthday name="Aaron" />}
            />
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
            <Route
              exact
              path="/vlee"
              component={() => <Birthday name="🅱️ictor" />}
            />
            <Route
              exact
              path="/dpeng"
              component={() => <Message message="Your rent is due." />}
            />
            <Route component={Placeholder} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
