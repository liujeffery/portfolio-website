import React from 'react'
import Github from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import IconButton from "@mui/material/IconButton"
import {Link} from "react-router-dom" 
import "../styles/Footer.css";

function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
          <Link to="https://github.com/liujeffery">
            <IconButton>
              <Github />
            </IconButton>
          </Link>
          <Link to="https://www.linkedin.com/in/jeffery-liu/">
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