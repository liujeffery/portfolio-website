import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Menu, Home, Work, ChecklistRtl} from "@mui/icons-material";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Stack, SwipeableDrawer} from "@mui/material";
import HashLinkObserver from "react-hash-link";

import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const data = [
    {name: "Home", icon: <Home sx={{color: "#58E0C8"}} />, url: "/portfolio-website#home"},
    {name: "Experiences", icon: <ChecklistRtl sx={{color: "#58E0C8"}} />, url: "/portfolio-website#experiences"},
    {name: "Projects", icon: <Work sx={{color: "#58E0C8"}} />, url: "/portfolio-website#projects"}
  ]

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className = "navbar">
    <HashLinkObserver />
      <div className = "toggleButton">
          <button
            onClick={(event) => {
              setExpandNavbar(true)
              event.stopPropagation()
            }}>
            <Menu />
          </button>
      </div>
      <Drawer
        anchor="top"
        hideBackdrop={false}
        variant="permanent"
        sx={{
          display:{
            xs: "none", 
            sm: "block"
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#3e497a"
          }
        }}
      >
        <Box
          sx={{width: 250}}
          role="presentation"
        >
          <List component={Stack} direction="row">
            {data.map((obj) => (
              <a href={obj.url} style={{textDecoration: "none", color: "#CCD6F6"}}>
                <ListItem>
                  <ListItemButton>
                      <ListItemIcon className="icon">
                        {obj.icon}
                      </ListItemIcon>
                      <ListItemText primary={obj.name} />
                  </ListItemButton>
                </ListItem>
              </a>
            ))}
          </List>
        </Box>
      </Drawer>

      <SwipeableDrawer 
        open={expandNavbar} 
        anchor="right"
        onOpen={() => setExpandNavbar(true)}
        onClose={() => setExpandNavbar(false)}
        hideBackdrop={false}
        sx={{
          display:{
            xs: "block", 
            sm: "none"
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#0A192F",

          }
        }}
      >
        <ClickAwayListener onClickAway={() => setExpandNavbar(false)}>
          <Box
            sx={{width: 250}}
            role="presentation"
          >
            <List>
              {data.map((obj) => (
                <Link to={obj.url} style={{textDecoration: "none", color: "#CCD6F6"}}>
                  <ListItem>
                    <ListItemButton>
                        <ListItemIcon className="icon">
                          {obj.icon}
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