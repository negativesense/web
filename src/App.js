import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import PublicIp from "public-ip";

import TopBar from "./topbar";
import Routes from "./routes";
import { IPContext } from "./context";

const themes = {
  lightTheme: {
    primary: "#495867",
    secondary: "#577899",
    light: "#bed4ea",
    background: "#e6ecf2",
    foreground: "#f7fbff",
    bright: "#54a9ff",
    shadow: "#c7cdd4",
    trophy: "#f5c02f"
  },
  darkTheme: {
    background: "#495867",
    foreground: "#596c80",
    secondary: "#577899",
    light: "#bed4ea",
    primary: "#e6ecf2",
    bright: "#54a9ff",
    shadow: "#333333",
    trophy: "#f5c02f"
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

if (process.env.NODE_ENV === "development") {
  ReactGA.initialize("UA-154764209-2", {
    debug: true
  });
} else if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-154764209-1");
}

const App = () => {
  const [ipv4, setIpv4] = useState(null);
  PublicIp.v4().then(ip => setIpv4(ip));
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
      <IPContext.Provider value={ipv4}>
        <React.Fragment>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Background />
            <TopBar
              onThemeChange={onThemeChange}
              theme={themes[theme] ? theme : defaultTheme}
            />
            <Content>
              <Routes />
            </Content>
          </BrowserRouter>
        </React.Fragment>
      </IPContext.Provider>
    </ThemeProvider>
  );
};

export default App;
