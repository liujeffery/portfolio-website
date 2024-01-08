import {React} from "react"

import Intro from "./Intro"
import Projects from "./Projects";
import Experiences from "./Experiences";

function Home() {
  return (
    <div>
      <Intro />
      <Experiences />
      <Projects />
    </div>
  )
}

export default Home