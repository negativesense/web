import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  width: 2em;
  height: 2em;
  background-color: #ffffff;
`;

const Timeline = () => {
  useEffect(() => {
    anime({
      targets: ".box",
      translateX: 250
    });
  });

  return <Box className="box" />;
};

export default Timeline;
