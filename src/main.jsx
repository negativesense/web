import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 50%;
  left: 25%;
  -moz-transform: translateX(-17%) translateY(-50%);
  -webkit-transform: translateX(-17%) translateY(-50%);
  transform: translateX(-17%) translateY(-50%);

  @media only screen and (max-width: 420px) and (max-height: 700px) {
    position: static;
    top: 0;
    left: 0;
    -moz-transform: none;
    -webkit-transform: none;
    transform: none;
    margin-top: 30px;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const HeadshotContainer = styled.div`
  opacity: 0;

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    @media only screen and (max-width: 760px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const IntroContainer = styled.div`
  margin-right: 50px;

  @media only screen and (max-width: 760px) {
    margin: 0 0 50px 0;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 100px;
  opacity: 0;

  @media only screen and (max-width: 1200px) {
    font-size: 70px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 760px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 30px;
  }
`;

const IntroText = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  margin: 30px 0 0 8px;

  @media only screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 20px;
    margin-left: 4px;
    margin-top: 20px;
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 40px 12px 0 8px;
  color: ${({ theme }) => theme.primary};

  @media only screen and (max-width: 760px) {
    margin-left: 4px;
    margin-top: 30px;
  }
`;

const Main = () => {
  useEffect(() => {
    anime
      .timeline({
        easing: "easeInSine"
      })
      .add({
        targets: ".name",
        translateY: ["-300px", 0],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: ".intro",
        translateY: ["300px", 0],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: ".headshot",
        translateX: ["300px", 0],
        opacity: [0, 1],
        duration: 500
      });
  }, []);

  return (
    <div>
      <MainContainer>
        <AboutContainer>
          <IntroContainer>
            <Name className="name">Charles Zhang</Name>
            <div className="intro" style={{ opacity: 0 }}>
              <IntroText>
                Hi there, I am a Computer Science student at the University of
                Waterloo. I have experience in full-stack and Android
                development for consumer, business, and internal facing
                applications. I love building impactful products that have a
                pleasant user experience.
              </IntroText>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gzcharleszhang"
                >
                  <SocialIcon icon={faGithub} size="2x" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/gzcz"
                >
                  <SocialIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="mailto:hello@czhang.me">
                  <SocialIcon icon={faEnvelope} size="2x" />
                </a>
              </span>
            </div>
          </IntroContainer>
          <HeadshotContainer className="headshot">
            <img src="headshot.png" alt="headshot" />
          </HeadshotContainer>
        </AboutContainer>
      </MainContainer>
    </div>
  );
};

export default Main;
