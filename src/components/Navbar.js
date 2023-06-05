import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Menu, Home, Work, ChecklistRtl} from "@mui/icons-material";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {Box, SwipeableDrawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const data = [
    {name: "Home", icon: Home, url: "/portfolio-website"},
    {name: "Projects", icon: Work, url: "/projects"},
    {name: "Experiences", icon: ChecklistRtl, url: "/experiences"}
  ]

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className = "navbar">
      <div className = "toggleButton">
          <button
            onClick={(event) => {
              setExpandNavbar(true)
              event.stopPropagation()
            }}>
            <Menu />
          </button>
      </div>
      <SwipeableDrawer open={expandNavbar} anchor={"right"} onClose={() => setExpandNavbar(false)} hideBackdrop="true">
        <ClickAwayListener onClickAway={() => setExpandNavbar(false)}>
          <Box
            sx={{width: 250}}
            role="presentation"
          >
            <List>
              {data.map((obj) => (
                <Link to={obj.url} style={{textDecoration: "none", color: "black"}}>
                  <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                          <obj.icon />
                        </ListItemIcon>
                        <ListItemText primary={obj.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </ClickAwayListener>
      </SwipeableDrawer>
    </div>
  )
}

export default Navbar