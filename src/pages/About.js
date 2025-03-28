import {React, useState, useEffect} from 'react';
import {Box} from "@mui/material";
import Carousel from 'react-material-ui-carousel'

import Work from "../assets/healthcare_systems_r_a_logo.png";
import Mist from "../assets/mist.png";
import McMaster from "../assets/mcmaster.png"
import sideProjects from "../assets/side_projects.png"
import "../styles/About.css";

const imgs = [McMaster, Work, Mist, sideProjects]
const links = 
[
  "https://www.mcmaster.ca/",
  "http://www.healthcare-systems.ca/",
  "https://mcmasterneudose.ca/",
  "https://github.com/liujeffery",
]
function AboutImage({img}) {
  return(
    <Box
      displayPrint='div'
      component="img"
      sx={{
        height: {xs: "60%", md: "230px"},
        width: {xs: "60%", md: "230px"},
        borderRadius: "20px",
        border: "7px solid #0A192F",
        marginLeft: {xs: "17.5%", md: "53px"}
      }}
      alt="Jeffery Liu"
      src={img}
    />
  )
}

function About() {
  const [activeImg, setActiveImg] = useState(0);
  const [startImg, setStartImg] = useState(1)
  
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setTimeout(() => {
        setStartImg(0);
      }, 1);
    }
    return (() => {
      ignore = true;
    })
  })

  function Highlight({text, id}){
    const isImg = activeImg === id;

    return (
      <a
        // eslint-disable-next-line
        href={isImg ? links[id] : "javascript:void(0);"}
        target={isImg ? "_blank": ""}
        rel={isImg? "noreferrer" : ""}
        style={{
          textDecoration: "none",
          fontWeight: isImg ? 500 : 400, 
          color: isImg ? "#58E0C8" : "#CCD6F6",
          transition: "color 2s",
          cursor: isImg ? "pointer" : "default",
        }}
      >
        {text}
      </a>
    )
  }

  return(
    <div>
      <div className="anchor" id="about-me"></div>
      <h1 className="title">About Me</h1>
      <Box 
        sx={{
          display: "inline-block",
          width: {xs: "100%", md: "50%"},
          marginRight: {xs: "0%", md: "5%"},
        }}
      >
        <Box 
          sx={{
            width: {xs: "94%", lg: "420px"},
            float: "right",
            color: "#CCD6F6",
            marginLeft: {xs: "4%", lg: "0px"},
            marginRight: {xs: "2%", lg: "0px"}
          }}
        >
          <p className="about-text">
            <b>Hello!</b> My name is <b>Jeffery Liu</b>, 
            and I'm in my third year of Software Engineering at <Highlight text="McMaster University" id={0}/>. In a discipline that emphasizes 
            continuous learning and improvement, I'm focused on expanding my skillset and adapting to industry needs.
            <br/>
            <br/>
            My most recent work experience was <Highlight text="Healthcare Systems R&A" id={1}/>.
            Outside of work, I'm a software specialist on the payload subteam for <Highlight text="McMaster's Interdisciplinary Satellite Team" id={2}/>.
            <br/>
            <br/>
            In my spare time, you can find me working on <Highlight text="side projects" id={3}/>, bouldering, and learning songs on my kalimba.
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          height: {xs: "auto", md: "250px"},
          width: {xs: "280px", md: "350px"},
          margin: {xs: "0 auto", md: "0px"},
          display: {xs: "block", md: "inline-block"},
        }}
      >
        <Carousel
          autoPlay={false}
          fullHeightHover={true}
          animation="slide"
          next={(active) => setActiveImg(active)}
          prev={(active) => setActiveImg(active)}
          navButtonsAlwaysVisible={true}
          index={startImg}
        >
          {imgs.map((img) => {
              return <AboutImage img={img}/>
            })}
        </Carousel>
      </Box>
    </div>
  )
}

export default About