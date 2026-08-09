import anime from "animejs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


const CountdownContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  color: ${props => props.theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 16px;
  font-size: xx-large;
  line-height: 1.4;
  user-select: none;
  pointer-events: none;
  z-index: 1;

  @media only screen and (max-width: 760px) {
    font-size: x-large;
    padding: 80px 12px;
  }

  @media only screen and (max-width: 420px) {
    font-size: large;
  }
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

  @media only screen and (max-width: 760px) {
    font-size: 80px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 50px;
  }
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

  @media only screen and (max-width: 420px) {
    font-size: 35px;
  }
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

  @media only screen and (max-width: 760px) {
    font-size: medium;
  }

  @media only screen and (max-width: 420px) {
    font-size: small;
  }
`

const CountdownSection = styled.div`
  margin: 30px 0;

  @media only screen and (max-width: 420px) {
    margin: 20px 0;
  }
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
    <BigPoop className="poop0" top={0} left={10}>💩</BigPoop>
    {/* lower left */}
    <BigPoop className="poop1" bottom={10} left={10}>💩</BigPoop>
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
  const targetTime = moment('20260929 07:00', 'YYYYMMDD hh:mm')
  const milestones = [
    ["💼 New Job", moment('20260817 00:00', 'YYYYMMDD hh:mm')],
    ["🌺 Hawaii", moment('20261227 00:00', 'YYYYMMDD hh:mm')],
    ["🤎 Wedding", moment('20270522 03:00', 'YYYYMMDD hh:mm')],
  ]
  const [currTime, setCurrTime] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => setCurrTime(moment()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const getDurationString = (target, detailed=false, reverse=false, useYears=false, useMonths=false) => {
    let diff = reverse ? moment.duration(currTime.diff(target)) : moment.duration(target.diff(currTime))
    let years = 0
    let s = ""
    
    if (useYears) {
      years = Math.floor(diff.asYears())
      diff = diff.subtract(years, 'y')
      s += `${years} years `
    }
    if (useMonths) {
      const months = Math.floor(diff.asMonths())
      diff = diff.subtract(months, 'M')
      s += `${months} months `
    }
    const days = Math.floor(diff.asDays())
    diff = diff.subtract(days, 'd')
    const hours = Math.floor(diff.asHours())
    diff = diff.subtract(hours, 'h')
    const minutes = Math.floor(diff.asMinutes())
    diff = diff.subtract(minutes, 'm')
    const seconds = Math.floor(diff.asSeconds())

    s += (detailed
      ? `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      : (useMonths ? `${days} days` : `${days} days ${hours} hours`)
    )
    return s
  }

  return <>
    <PoopClicker />
    <Poop />
    <CountdownContainer>
      <div>Time left until I see my schmoop <span className="poop">💩</span></div>
      <div>{getDurationString(targetTime, true)}</div>
      <CountdownSection>
        <SmallCountdown>{"😘 Poopies 4EVA"}: {getDurationString(moment('20220327 00:00', 'YYYYMMDD hh:mm'), false, true, true, true)}</SmallCountdown>
        <SmallCountdown>{"💍 Time Since Engaged"}: {getDurationString(moment('20250609 00:00', 'YYYYMMDD hh:mm'), false, true, true, true)}</SmallCountdown>
      </CountdownSection>
      <CountdownSection>
        {
          milestones.map(m => (
            <SmallCountdown key={m[0]}>{m[0]}: {getDurationString(m[1])}</SmallCountdown>
          ))
        }
      </CountdownSection>
    </CountdownContainer>
  </>
}

export default Countdown
