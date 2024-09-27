import anime from "animejs";
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

const BigPoop = styled.div`
  position: absolute;
  font-size: 150px;
  top: ${props => props.top + "%"};
  left: ${props => props.left + "%"};
  bottom: ${props => props.bottom + "%"};
  right: ${props => props.right + "%"};
  overflow: hidden;
`

const Poop = () => {
  useEffect(() => {
    anime({
      targets: ".poop0",
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 2000,
      top: "80%",
    })
    anime({
      targets: ".poop1",
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 2000,
      left: "80%",
    })
    anime({
      targets: ".poop2",
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 2000,
      bottom: "80%",
    })
    anime({
      targets: ".poop3",
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 2000,
      left: "10%",
    })
  }, []);

  return <>
    {/* upper left */}
    <BigPoop className="poop0">💩</BigPoop>
    {/* lower left */}
    <BigPoop className="poop1" bottom={10}>💩</BigPoop>
    {/* lower right */}
    <BigPoop className="poop2" right={10} bottom={10}>💩</BigPoop>
    {/* upper right */}
    <BigPoop className="poop3" right={10}>💩</BigPoop>
  </>
}

const Countdown = () => {
  const targetTime = moment('20241012 13:00', 'YYYYMMDD hh:mm')
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
    <Poop />
    <CountdownContainer>
      <div>Time left until I see my schmoop <span className="poop">💩</span></div>
      <div>{days} days {hours} hours {minutes} minutes {seconds} seconds</div>
    </CountdownContainer>
  </>
}

export default Countdown
