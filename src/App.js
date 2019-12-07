import React from "react";
import styled, { ThemeProvider } from "styled-components";

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
// https://coolors.co/495867-577899-bed4ea-f7fbff-54a9ff

const theme = {
  primary: "#495867",
  secondary: "#577899",
  light: "#bed4ea",
  background: "#f7fbff",
  bright: "#54a9ff"
};

const TopBar = styled.div`
  padding: 2%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  margin: 0 15px;
  text-decoration-line: none;

  &:hover {
    cursor: pointer;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <TopBar>
          <Link href="/">About</Link>
          <Link href="https://github.com/gzcharleszhang">Projects</Link>
          {/* <Link href="blog">Blog</Link> */}
          <Link href="resume.pdf">Resume</Link>
        </TopBar>
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
          <Route component={Placeholder} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
