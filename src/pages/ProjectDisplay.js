import React from 'react';
import {useParams, Link} from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import Github from "@mui/icons-material/GitHub";
import {motion} from "framer-motion";
import "../styles/ProjectDisplay.css";
import IconButton from "@mui/material/IconButton";

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt=""/>
            <br/>
            <p> {project.description} </p>
            <Link
                to= {project.link}
                target="_blank"
            >
                <motion.div whileHover={{scale: 3}}/>
                <IconButton >
                <Github />
                </IconButton>
          </Link>
        </div>
    );
}

export default ProjectDisplay