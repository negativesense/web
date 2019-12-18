import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Container = styled.a`
  width: 300px;
  height: 380px;
  box-shadow: 3px 3px 10px ${props => props.theme.shadow};
  transition: transform 0.2s ease-in-out;
  background-color: ${props => props.theme.foreground};
  border-radius: 5px;
  margin: 30px 0;
  text-decoration-line: none;
  opacity: 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }

  @media only screen and (max-width: 350px) {
    width: 250px;
    height: 320px;
  }
`;

const TextContainer = styled.div`
  padding: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: 350px) {
    padding: 15px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 180px;
  border-radius: 5px 5px 0 0;

  @media only screen and (max-width: 350px) {
    width: 250px;
    height: 150px;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.primary};
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.primary};

  @media only screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

const TrophyIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: ${props => props.theme.trophy};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Project = ({
  imgSrc,
  title,
  children,
  href,
  altImg = "project_image",
  showTrophy = false
}) => (
  <Container
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="project"
  >
    <Image src={imgSrc} alt={altImg} />
    <TextContainer>
      <TitleContainer>
        <Title>{title}</Title>
        {showTrophy && <TrophyIcon icon={faTrophy} />}
      </TitleContainer>
      <Description>{children}</Description>
    </TextContainer>
  </Container>
);

export default Project;
