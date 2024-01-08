import {React, useState} from 'react';
import { Box, Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';

import ProjectItem from "../components/ProjectItem";
import {ProjectList} from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  const [active, setActive] = useState(false);
  return (
    <VizSensor className="vizSensor"
      onChange={(isVisible) => {
          setActive({isVisible});
      }}
    >
      <Fade in={active}>
        <Box className = "projects" id="projects">
          <h1>Projects</h1>
          <div className = "projectList">
            {ProjectList.map((project, idx) => {
              return <ProjectItem id={idx} name={project.name} image={project.image}/>
            })}
          </div>
        </Box>
      </Fade>
    </VizSensor>
  )
}

export default Projects