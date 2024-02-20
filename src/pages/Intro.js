import {React, useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import {Box, Fade} from "@mui/material"

import Jeffery from '../assets/jeffery.png'
import "../styles/Intro.css";

function Intro() {
  const [load, setLoad] = useState(false);
  const [intro, setIntro] = useState(
  <Typewriter
    options={{
    strings: 'Hi, my name is Jeffery.',
    autoStart: true,
    delay: 120,
    cursor: "|"
    }}
  />)

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setTimeout(() => {
        setLoad(true)
      }, 1);
      setTimeout(() => {
        setIntro("Hi, my name is Jeffery.")
      }, 4000);
    }
    return (() => {
      ignore = true;
    })
  })

  return (
    <div className="home">
      <a className="anchor" id="home"></a>
      <div className = "about">
        <Fade in={load}>
          <Box
            displayPrint='div'
            component="img"
            sx={{
                height: 250,
                width: 250,
            }}
            alt="Jeffery Liu"
            src={Jeffery}
          />
        </Fade>
        <h2>{intro}</h2>
        <div>
          <p>A software engineering student with a passion for learning and developing.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro