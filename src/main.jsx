import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MainContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  position: absolute;
  top: 50%;
  left: 25%;
  -moz-transform: translateX(-17%) translateY(-50%);
  -webkit-transform: translateX(-17%) translateY(-50%);
  transform: translateX(-17%) translateY(-50%);
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeadshotContainer = styled.div`
  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

const IntroContainer = styled.div`
  margin-right: 50px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 100px;
`;

const IntroText = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  margin: 10px 0 0 8px;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 20px 12px 0 8px;
  color: ${({ theme }) => theme.primary};
`;

const Main = () => {
  useEffect(() => {
    anime({
      targets: ".name",
      translateY: -1000,
      duration: 1500,
      direction: "reverse",
      easing: "easeInSine"
    });
    anime({
      targets: ".intro",
      translateY: 1000,
      direction: "reverse",
      duration: 2000,
      easing: "easeInSine"
    });
    anime({
      targets: ".headshot",
      translateX: 1000,
      duration: 2500,
      direction: "reverse",
      easing: "easeInSine"
    });
  });
  return (
    <div>
      <MainContainer>
        <AboutContainer>
          <IntroContainer>
            <Name className="name">Charles Zhang</Name>
            <div className="intro">
              <IntroText>
                Hi there, I am a Computer Science student at the University of
                Waterloo. I have experience in full-stack and android
                development for consumer, corporate, and internal facing
                applications. I love building impactful products that have a
                pleasant user experience.
              </IntroText>
              <span>
                <a href="https://github.com/gzcharleszhang">
                  <SocialIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://linkedin.com/in/gzcz">
                  <SocialIcon icon={faLinkedin} size="2x" />
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
