import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import anime from "animejs";

const Container = styled.div`
  text-align: center;
  color: #ffffff;
  margin-top: 25%;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 0 0.5em;
  color: #ffffff;
`;

const Placeholder = () => {
  return (
    <Container>
      <h2>Under Construction 🛠</h2>
      <span>
        <a href="https://github.com/gzcharleszhang">
          <SocialIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://linkedin.com/in/gzcz">
          <SocialIcon icon={faLinkedin} size="2x" />
        </a>
      </span>
    </Container>
  );
};

export default Placeholder;