import React from 'react';
import "../styles/Home.css";
import Typewriter from 'typewriter-effect';
import {Box} from "@mui/material"
import Jeffery from '../assets/jeffery.png'

function Home() {

  return (
    <div className = "home">
      <div className = "about">
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
        <h2> 
          <Typewriter
            options={{
              strings: 'Hi, my name is Jeffery.',
              autoStart: true,
              delay: 100
            }}
          />
        </h2>
        <div>
          <p>
          A software engineering student with a passion for learning and developing.</p>
        </div>
      </div>
      <div className = "skills">
        <h1> Skills </h1>
        <ol className = "list">
          <li className = "item">
            <h2>Technologies</h2>
            <span>
              React.js, HTML, CSS, NPM, MaterialUI, Node.js, Google Cloud,
              Autodesk Inventor, Java Swing, Heroku, Bash
            </span>
          </li>
          <li className = "item">
            <h2>Languages</h2>
            <span>
              Python, Java, Javascript, HTML, CSS, Matlab
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home