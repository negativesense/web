import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
import Sound from "react-sound";

const Container = styled.div`
  text-align: center;
  color: #ffffff;
  margin-top: 25%;
`;

export const FriendOffer = ({ company }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: 300,
        easing: "easeOutElastic(1, .8)"
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: 300,
        easing: "easeOutElastic(1, .8)"
      });
  });
  return (
    <Container>
      <h2 className="friend-text">Congrats on your {company} offer! 😍🎉</h2>
    </Container>
  );
};

export const Message = ({ message }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: 300,
        easing: "easeOutElastic(1, .8)"
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: 300,
        easing: "easeOutElastic(1, .8)"
      });
  });
  return (
    <Container>
      <h2 className="friend-text">{message}</h2>
    </Container>
  );
};

export const FriendCont = ({ name }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: 500,
        easing: "easeOutElastic(1, .8)"
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: 500,
        easing: "easeOutElastic(1, .8)"
      });
  });
  return (
    <Container>
      <h2 className="friend-text">Good luck in continuous, {name}! 💪🏼</h2>
    </Container>
  );
};

export const Birthday = ({ name }) => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: 500,
        easing: "easeOutElastic(1, .8)"
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: 500,
        easing: "easeOutElastic(1, .8)"
      });
  });
  return (
    <Container>
      <h2 className="friend-text">Happy Birthday, {name}! 🎉</h2>
    </Container>
  );
};

const Wrapper = styled.div`
  text-align: center;
  color: #ffffff;
`;

export const FriendOfferCrazy = ({ company }) => {
  const numElements = 20;
  const duration = 300;
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: duration,
        easing: "easeOutElastic(1, .8)",
        delay: (el, i) => {
          return (duration / numElements) * i;
        }
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: duration,
        easing: "easeOutElastic(1, .8)",
        delay: (el, i) => {
          return (duration / numElements) * (numElements - i);
        }
      });
  });
  const elements = [];
  const el = (
    <Wrapper>
      <Sound url="jason.mp3" playStatus={Sound.status.PLAYING} loop />
      <h2 className="friend-text">Congrats on your {company} offer! 😍🎉</h2>
    </Wrapper>
  );
  for (let i = 0; i < numElements; i++) {
    elements.push(el);
  }
  return <div>{elements}</div>;
};

export const Crazy = ({ message }) => {
  const numElements = 20;
  const duration = 300;
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".friend-text",
        scale: [1, 3],
        duration: duration,
        easing: "easeOutElastic(1, .8)",
        delay: (el, i) => {
          return (duration / numElements) * i;
        }
      })
      .add({
        targets: ".friend-text",
        scale: [3, 1],
        duration: duration,
        easing: "easeOutElastic(1, .8)",
        delay: (el, i) => {
          return (duration / numElements) * (numElements - i);
        }
      });
  });
  const elements = [];
  const el = (
    <Wrapper>
      <h2 className="friend-text">{message}</h2>
    </Wrapper>
  );
  for (let i = 0; i < numElements; i++) {
    elements.push(el);
  }
  return <div>{elements}</div>;
};
