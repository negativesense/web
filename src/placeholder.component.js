import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 0 0.5em;
  color: ${({ theme }) => theme.primary};
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
