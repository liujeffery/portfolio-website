import { useState } from 'react';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function ProjectItem({ project, handleMouseEnter, handleMouseLeave, opacity, above900 }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "#CCD6F6" }}
    >
      <Box
        onMouseEnter={() => {
          setIsHovered(true);
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        className="projectItem"
        sx={{
          position: 'relative',
          borderRadius: "10px",
          border: 1,
          borderWidth: "1px",
          marginBottom: "70px",
          padding: "20px 20px 30px 20px",
          borderColor: "transparent",
          display: "flex",
          opacity: opacity,
          transition: "0.2s",
          cursor: "default",
          "&:hover": above900 && {
            backgroundColor: "#102240",
            opacity: 1,
            cursor: "pointer"
          }
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.name}
          sx={{
            height: "20%",
            width: "20%",
            borderRadius: 2,
            border: "1px solid white",
            display: "inline-block",
          }}
        />
        <Box
          sx={{
            display: "inline-block",
            marginLeft: 2,
          }}
        >
          <h1
            className="header"
            style={{
              marginTop: "0",
              fontSize: "1.05em",
              fontWeight: "100px",
            }}
          >
            {project.name}
            <Box
              sx={{
                display: "inline-block",
                width: '20px',
                height: '20px',
                marginLeft: '10px',
                transition: 'transform 0.2s',
                transform: isHovered ? 'translateY(+25%) rotate(-45deg)' : 'translateY(+25%)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isHovered ? "#58E0C8" : "white"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "0.2s"
                }}
              >
                <path d="M5 12L19 12" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Box>
          </h1>
          <p>{project.description}</p>
          <ul className="project_tools">
            {project.skills.map((skill, idx) => {
              return(
                <li>{skill}</li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </a>
  );
}

function Projects() {
  const [active, setActive] = useState(false);
  const above900 = useMediaQuery('(min-width:900px)');

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  const opacity = active && above900 ? 0.5 : 1;

  return (
    <Box sx={{ margin: "auto", width: { xs: "95%", md: "850px" } }}>
      <div className="anchor" id="projects"></div>
      <h1 className="title">Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              project={project}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              opacity={opacity}
              above900={above900}
            />
          );
        })}
      </div>
    </Box>
  );
}

export default Projects;