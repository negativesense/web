import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import Project from "./project";

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
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
        imgSrc="receiptify.png"
        title="Receiptify"
        href="https://github.com/gzcharleszhang/reCeiptify"
      >
        An application that uses OCR to parse receipts, then allows the user to
        split the bill with their friends.
        <br />
        <br />
        AngularJS, NodeJS, and Firebase.
      </Project>
      <Project
        imgSrc="uwtimeline.jpeg"
        title="UW Timeline"
        href="https://github.com/gzcharleszhang/course-planner"
      >
        An application that helps students at the University of Waterloo to plan
        their future courses with ease.
        <br />
        <br />
        React, Golang, and MongoDB.
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
        React, NodeJS, and MongoDB.
      </Project>
    </Container>
  );
};

export default Projects;
