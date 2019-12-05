import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 100px 200px;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 0;
`;

const HeadshotContainer = styled.div`
  & > img {
    width: 250px;
    height: 300px;
  }
`;

const IntroContainer = styled.div`
  margin: 0 50px;
`;

const HiText = styled.p`
  color: white;
  margin: 0;
`;

const NameText = styled.p`
  color: white;
  font-size: 30pt;
  line-height: 30px;
  margin: 30px 0;
`;

const IntroText = styled.p`
  color: white;
  margin: 0;
`;

const Main = () => (
  <MainContainer>
    <AboutContainer>
      <IntroContainer>
        <HiText>Hi, my name is</HiText>
        <NameText>Charles Zhang</NameText>
        <IntroText>
          I am a Computer Science student at University of Waterloo. I love
          building impactful products and provide elegant solutions to
          challenging problems.
        </IntroText>
      </IntroContainer>
      <HeadshotContainer>
        <img src="headshot.png" alt="headshot" />
      </HeadshotContainer>
    </AboutContainer>
  </MainContainer>
);

export default Main;
