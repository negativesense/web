import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Link = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  margin: 0 15px;
  text-decoration-line: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

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

  @media only screen and (max-width: 768px) {
    width: 33px;
    height: 18px;
    margin: 0 10px;
  }

  @media only screen and (max-width: 350px) {
    width: 22px;
    height: 12px;
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

  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 14px;
  }

  @media only screen and (max-width: 350px) {
    width: 8px;
    height: 8px;
  }

  ${props =>
    props.themeType === "darkTheme" &&
    `
      transform: translateX(20px);

      @media only screen and (max-width: 768px) {
        transform: translateX(15px);

      }

      @media only screen and (max-width: 350px) {
        transform: translateX(9px);

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
      <Link href="/">About</Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gzcharleszhang"
      >
        Projects
      </Link>
      {/* <Link href="blog">Blog</Link> */}
      <Link target="_blank" rel="noopener noreferrer" href="resume.pdf">
        Resume
      </Link>
      <ThemeSwitch onClick={onThemeSwitchClick}>
        <Slider themeType={theme} />
      </ThemeSwitch>
    </Container>
  );
};
export default TopBar;
