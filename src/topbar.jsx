import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = css`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  margin: 0 15px;
  text-decoration-line: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2, 1.2);
    -webkit-transform: scale(1.2, 1.2);
    -moz-transform: scale(1.2, 1.2);
    -ms-transform: scale(1.2, 1.2);
  }

  @media only screen and (max-width: 760px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

const Link = styled(NavLink)`
  ${StyledLink}
`

const Externalink = styled.a`
  ${StyledLink}
`

const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  width: 44px;
  height: 24px;
  border-radius: 50px;
  background-color: ${props => props.theme.primary};

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 760px) {
    width: 33px;
    height: 18px;
    margin: 0 10px;
  }

  @media only screen and (max-width: 420px) {
    width: 25px;
    height: 14px;
    margin: 0 10px;
  }
`;

const Slider = styled.div`
  background-color: ${props => props.theme.background};
  margin: 0 2px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: transform 0.1s;

  @media only screen and (max-width: 760px) {
    width: 14px;
    height: 14px;
  }

  @media only screen and (max-width: 420px) {
    width: 10px;
    height: 10px;
  }

  ${props =>
    props.themeType === "darkTheme" &&
    `
      scale(1.2);
      transform: translateX(20px);
      -moz-transform: translateX(20px);
      -webkit-transform: translateX(20px);

      @media only screen and (max-width: 760px) {
        transform: translateX(15px);
        -moz-transform: translateX(15px);
        -webkit-transform: translateX(15px);
      }

      @media only screen and (max-width: 420px) {
        transform: translateX(11px);
        -moz-transform: translateX(11px);
        -webkit-transform: translateX(11px);
      }
    `};
`;

const TopBar = ({ onThemeChange, theme }) => {
  const onThemeSwitchClick = () => {
    if (theme === "lightTheme") {
      onThemeChange("darkTheme");
    } else {
      onThemeChange("lightTheme");
    }
  };
  return (
    <Container>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      {/* <Link href="blog">Blog</Link> */}
      <Link target="_blank" rel="noopener noreferrer" to="resume.pdf">
        Resume
      </Link>
      <Externalink
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.notion.so/cdb52b032a6f4e3eb6e2c6e1cf1df9fa?v=daaf24b3d13041bcad08481fd54908b5">
        Food
      </Externalink>
      <ThemeSwitch onClick={onThemeSwitchClick}>
        <Slider themeType={theme} />
      </ThemeSwitch>
    </Container>
  );
};
export default TopBar;
