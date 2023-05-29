import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experiences() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor = "#3e497a">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--university"
          date = "September 2021-present"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster University
          </h3>
          <p>
            Candidate for B.S in Software Engineering <br />
            Cumulative GPA: 3.87 <br />
            Relevant courses: Data Structures & Algorithms (A+), Software Engineering Practice & Experience
            (A+), Digital Systems & Interfacing (A), Object Oriented Programming (A)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--work"
          date = "April 2022 - August 2022"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            CIBC
          </h3>
          <p>
            Technical Analyst
          </p>
          <ul>
            <li>
              Collaborated on a team to monitor critical infrastructure operations and resolve or escalate issues
            </li>
            <li>
              As a sector-wide initiative for innovation, implemented features and additional functionality for internal
              use, including creating and modifying tools for management using Java
            </li>
            <li>
              Aided in creation and planning of automation project that would reduce manual work by 45 hours a
              month, using Python
            </li>
            <li>
              Independently designed, scheduled, and delegated tasks using Agile methodology, working closely
              with project managers and other team members in developmen
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--high-school"
          date = "September 2017- April 2021"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Victoria Park CI
          </h3>
          <p>
            Graduate of the International Baccalaureate program
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences