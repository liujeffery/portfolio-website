import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className = "home">
      <div className = "about">
        <h2> Hi, my name is Jeffery. </h2>
        <div>
          <p>A software developer with a passion for learning and creating.</p>
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