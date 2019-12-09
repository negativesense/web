import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

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
import Projects from "./projects/projects";
// https://coolors.co/495867-577899-bed4ea-f7fbff-54a9ff

const themes = {
  lightTheme: {
    primary: "#495867",
    secondary: "#577899",
    light: "#bed4ea",
    background: "#e6ecf2",
    cardBackground: "#f7fbff",
    bright: "#54a9ff",
    shadow: "#c7cdd4"
  },
  darkTheme: {
    background: "#495867",
    cardBackground: "#596c80",
    secondary: "#577899",
    light: "#bed4ea",
    primary: "#e6ecf2",
    bright: "#54a9ff",
    shadow: "#333333"
  }
};

const Background = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }
`;

const Content = styled.div`
  padding: 0 10%;
`;

const App = () => {
  const defaultTheme = "lightTheme";
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || defaultTheme
  );
  const onThemeChange = updatedTheme => {
    window.localStorage.setItem("theme", updatedTheme);
    setTheme(updatedTheme);
  };
  return (
    <ThemeProvider theme={themes[theme] || themes[defaultTheme]}>
      <React.Fragment>
        <Background />
        <TopBar
          onThemeChange={onThemeChange}
          theme={themes[theme] ? theme : defaultTheme}
        />
        <Content>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                component={() => (
                  <Message message="Happy 🅱️elated 🅱️irthday!!" />
                )}
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
              <Route component={Main} />
            </Switch>
          </BrowserRouter>
        </Content>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
