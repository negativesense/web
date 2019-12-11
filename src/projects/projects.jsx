import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import Project from "./project";

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  &::after {
    content: "";
    width: 300px;
  }
`;

const Projects = () => {
  useEffect(() => {
    anime({
      targets: ".project",
      opacity: [0, 1],
      duration: 500,
      easing: "easeInSine"
    });
  }, []);
  return (
    <Container>
      <Project
        imgSrc="uwtimeline.jpeg"
        title="UW Timeline"
        href="https://github.com/gzcharleszhang/course-planner"
      >
        An application that helps students at the University of Waterloo to plan
        their future courses with ease.
        <br />
        <br />
        React, Golang, MongoDB
      </Project>
      <Project
        imgSrc="receiptify.png"
        title="Receiptify"
        href="https://github.com/gzcharleszhang/reCeiptify"
        showTrophy
      >
        An application that uses OCR to parse receipts, then allows the user to
        split the bill with their friends.
        <br />
        <br />
        AngularJS, NodeJS, Firebase
      </Project>
      <Project
        imgSrc="wine.jpg"
        title="Wine Prediction"
        href="https://github.com/gzcharleszhang/wine-quality-prediction"
      >
        Using machine learning models and neural networks to classify the type
        and predict the quality of wine.
        <br />
        <br />
        Python, scikit-learn, Keras, Pandas
      </Project>
      <Project
        imgSrc="pickleleaf.png"
        title="PickleLeaf"
        href="https://github.com/gzcharleszhang/pickleleaf"
      >
        A web application that provides a marketplace for users to buy and sell
        textbooks.
        <br />
        <br />
        React, NodeJS, MongoDB
      </Project>
      <Project
        imgSrc="toronto-traffic.png"
        title="Traffic Data Visualization"
        href="https://github.com/gzcharleszhang/traffic-data-visualization"
      >
        Interactive maps and graphs that visualizes traffic data in the city of
        Toronto.
        <br />
        <br />
        Python, Dash, MySQL
      </Project>
      <Project
        imgSrc="lejr.png"
        title="Lejr"
        href="https://github.com/gzcharleszhang/Lejr"
        showTrophy
      >
        An app that keeps track of loans between friends and supports repayments
        via Interac e-transfer.
        <br />
        <br />
        Node.js, MongoDB
      </Project>
      <Project
        imgSrc="chess.jpeg"
        title="AI Chess"
        href="https://github.com/gzcharleszhang/AIChessGame"
      >
        A chess game which the player can choose to battle an AI or another
        online player.
        <br />
        <br />
        .NET, C#
      </Project>
      <Project
        imgSrc="trapped.png"
        title="Trapped"
        href="https://github.com/gzcharleszhang/trapped"
      >
        A horror themed puzzle game which the player's goal is to escape the
        building they are trapped in.
        <br />
        <br />
        Unreal Engine, Blueprints
      </Project>
    </Container>
  );
};

export default Projects;
