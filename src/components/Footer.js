import React from 'react'
import Github from "@mui/icons-material/GitHub"
import LinkedIn from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css";

function Footer() {
  return (
    <div className = "footer">
        <div className = "socialMedia">
            <Github />
            <LinkedIn />
        </div>
        <p>@2023 Jeffery Liu</p>
    </div>
  )
}

export default Footer