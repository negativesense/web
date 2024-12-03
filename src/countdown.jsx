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
  user-select: none;
  pointer-events: none;
`

const BigPoop = styled.div`
  position: absolute;
  font-size: 150px;
  top: ${props => props.top + "%"};
  left: ${props => props.left + "%"};
  bottom: ${props => props.bottom + "%"};
  right: ${props => props.right + "%"};
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  z-index: 3;
`

const ClickPoop = styled.div`
  position: fixed;
  font-size: 50px;
  top: ${props => props.top + "px"};
  left: ${props => props.left + "px"};
  bottom: ${props => props.bottom + "px"};
  right: ${props => props.right + "px"};
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  z-index: 2;
`

const PoopClickerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const SmallCountdown = styled.div`
  font-size: large;
  margin: 5px 0;
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

const PoopClicker = () => {
  const [poopCoords, setpoopCoords] = useState([])

  useEffect(() => {
    anime({
      targets: `.clickpoop`,
      opacity: 0,
      duration: 6000,
    })
  }, [poopCoords])

  const onMouseClick = (e) => {
    // remove stale poops older than 5 seconds
    const freshPoops = poopCoords.filter(p => (Date.now() - p[2]) < 5000 )
    setpoopCoords([...freshPoops, [e.clientX, e.clientY, Date.now()]])
  };

  return (
    <>
      {
        (poopCoords.length > 0)
        ? poopCoords.map(p =>
            <ClickPoop
              key={(p[2]).toString()}
              className="clickpoop"
              left={p[0] - 30}
              top={p[1] - 5}
            >💩</ClickPoop>
        )
        : null
      }
      <PoopClickerContainer onClick={onMouseClick} />
    </>
  )
}

const Countdown = () => {
  const targetTime = moment('20241109 22:00', 'YYYYMMDD hh:mm')
  const milestones = [
    ["🎤 Taylor Swift", moment('20241115 16:00', 'YYYYMMDD hh:mm')],
    ["🍣 Japan", moment('20241228 12:00', 'YYYYMMDD hh:mm')],
    ["🤎 Anniversary", moment('20250327 03:00', 'YYYYMMDD hh:mm')]
  ]
  const [currTime, setCurrTime] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => setCurrTime(moment(), 1000))
    return () => {
      clearInterval(interval)
    }
  }, [])

  const getDurationString = (target, detailed=false) => {
    let diff = moment.duration(target.diff(currTime))
    const days = Math.floor(diff.asDays())
    diff = diff.subtract(days, 'd')
    const hours = Math.floor(diff.asHours())
    diff = diff.subtract(hours, 'h')
    const minutes = Math.floor(diff.asMinutes())
    diff = diff.subtract(minutes, 'm')
    const seconds = Math.floor(diff.asSeconds())

    return (detailed
      ? `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      : `${days} days ${hours} hours`
    )
  }

  return <>
    <PoopClicker />
    <Poop />
    <CountdownContainer>
      <div>Time left until I see my schmoop <span className="poop">💩</span></div>
      <div>{getDurationString(targetTime, true)}</div>
      {
        milestones.map(m => (
          <SmallCountdown>{m[0]}: {getDurationString(m[1])}</SmallCountdown>
        ))
      }
    </CountdownContainer>
  </>
}

export default Countdown
