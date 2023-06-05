import React from 'react';
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
          <Link 
            to="https://github.com/liujeffery"
            target="_blank"
          >
            <motion.link whileHover={{scale: 1.2}}/>
            <IconButton >
              <Github />
            </IconButton>
          </Link>
          <Link 
            to="https://www.linkedin.com/in/jeffery-liu/"
            target="_blank"
          >
            <IconButton>
              <LinkedIn />
            </IconButton> 
          </Link>
        </div>
        <p>@2023 Jeffery Liu</p>
    </div>
  )
}

export default Footer