import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


const CountdownContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.primary};
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  font-size: xx-large;
`

const Countdown = () => {
  const targetTime = moment('20231204', 'YYYYMMDD')
  const [currTime, setCurrTime] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => setCurrTime(moment(), 1000))
    return () => {
      clearInterval(interval)
    }
  }, [])

  let diff = moment.duration(targetTime.diff(currTime))
  const days = Math.floor(diff.asDays())
  diff = diff.subtract(days, 'd')
  const hours = Math.floor(diff.asHours())
  diff = diff.subtract(hours, 'h')
  const minutes = Math.floor(diff.asMinutes())
  diff = diff.subtract(minutes, 'm')
  const seconds = Math.floor(diff.asSeconds())

  return <>
    <CountdownContainer>
      <div>Time left until I see my schmoop 💩</div>
      <div>{days} days {hours} hours {minutes} minutes {seconds} seconds</div>
    </CountdownContainer>
  </>
}

export default Countdown
