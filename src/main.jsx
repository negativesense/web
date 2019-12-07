import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  margin: 18% 10% 0 10%;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5%;
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
  max-width: 700px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  font-size: 100px;
`;

const IntroText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  margin: 10px 0 0 8px;
`;

const Main = () => (
  <MainContainer>
    <AboutContainer>
      <IntroContainer>
        <Name>Charles Zhang</Name>
        <IntroText>
          Hi there, I am a Computer Science student at the University of
          Waterloo. I have experience in full-stack and android development for
          consumer, corporate, and internal facing applications. I love building
          impactful products that have a pleasant user experience.
        </IntroText>
      </IntroContainer>
      <HeadshotContainer>
        <img src="headshot.png" alt="headshot" />
      </HeadshotContainer>
    </AboutContainer>
  </MainContainer>
);

export default Main;
