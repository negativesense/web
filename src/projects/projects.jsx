import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import Project from "./project";

const Container = styled.div`
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;

  &::after {
    content: "";
    width: 340px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
        altImg="uw_timeline"
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
        altImg="receiptify"
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
        altImg="wine"
      >
        Using machine learning models and neural networks to determine wine type
        and quality.
        <br />
        <br />
        Python, scikit-learn, Keras, Pandas
      </Project>
      <Project
        imgSrc="pickleleaf.png"
        title="PickleLeaf"
        href="https://github.com/gzcharleszhang/pickleleaf"
        altImg="pickleleaf"
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
        altImg="traffic_data"
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
        altImg="lejr"
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
        altImg="chess"
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
        altImg="trapped"
      >
        A horror themed puzzle game which the goal is to escape the building
        they are trapped in.
        <br />
        <br />
        Unreal Engine, Blueprints
      </Project>
    </Container>
  );
};

export default Projects;
