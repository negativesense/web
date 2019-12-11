import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import TopBar from "./topbar";
import Routes from "./routes";

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
    </ThemeProvider>
  );
};

export default App;
