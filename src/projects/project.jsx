import React from "react";
import styled from "styled-components";

const Container = styled.a`
  width: 300px;
  height: 380px;
  box-shadow: 3px 3px 10px ${props => props.theme.shadow};
  transition: transform 0.2s ease-in-out;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 5px;
  margin: 30px 0;
  text-decoration-line: none;
  opacity: 0;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const TextContainer = styled.div`
  padding: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  width: 300px;
  height: 180px;
  border-radius: 5px;
`;

const Title = styled.div`
  color: ${props => props.theme.primary};
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.primary};
`;

const Project = ({ imgSrc, title, children, href }) => (
  <Container
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="project"
  >
    <Image src={imgSrc} alt="project_image" />
    <TextContainer>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </TextContainer>
  </Container>
);

export default Project;
