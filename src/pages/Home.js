import {React} from "react"

import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";

function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Experiences />
      <Projects />
    </div>
  )
}

export default Home