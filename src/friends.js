import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

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
      <h2 className="friend-text">Congrats on your {company} offer! 😍🎉</h2>
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
      <h2 className="friend-text">Good luck in continuous, {name}! 💪🏼</h2>
    </Container>
  );
};
