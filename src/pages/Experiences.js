import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Mist from "@mui/icons-material/RocketLaunch";

function Experiences() {
  return (
    <div className = "experience">
      <VerticalTimeline lineColor = "#3e497a">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--university"
          date = "September 2021 - present"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster University
          </h3>
          <br/>
          <p>
            <i>Candidate for B.E in Software Engineering</i> <br /><br/>
            Cumulative GPA: 3.87 <br /><br/>
            Relevant courses: Data Structures & Algorithms (A+), Software Engineering Practice & Experience
            (A+), Digital Systems & Interfacing (A), Object Oriented Programming (A)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--healthcare-r&a"
          date = "May 2023 - present"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Healthcare Systems R&A
          </h3>
          <p>
            <i>Software Engineering Research Assistant</i>
          </p>
          <ul>
            <li>
              Collaborate on a team to process data from EEG headsets and identify imagined movement 
              through various machine learning algorithms
              <ul>
                <br/>
                <li>
                  Software involved preprocessing, feature extraction and selection, and classification of data
                </li>
              </ul>
            </li>
            <br/>
            <li>
              Aid in development of games that would be controlled by identification of corresponding imagined movement
            </li>
            <br/>
            <li>
              Integrate the signal processing software with games
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--cibc"
          date = "May 2022 - August 2022"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            CIBC
          </h3>
          <p>
            <i>Technical Analyst</i>
          </p>
          <ul>
            <li>
              Collaborated on a team to monitor critical infrastructure operations and resolve or escalate issues
            </li>
            <br/>
            <li>
              As a sector-wide initiative for innovation, implemented features and additional functionality for internal
              use, including creating and modifying tools for management using Java
            </li>
            <br/>
            <li>
              Aided in creation and planning of automation project that would reduce manual work by 45 hours a
              month, using Python
            </li>
            <br/>
            <li>
              Independently designed, scheduled, and delegated tasks using Agile methodology, working closely
              with project managers and other team members in development
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--mist"
          date = "May 2023 - present"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<Mist />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster Interdisciplinary Satellite Team
          </h3>
          <p>
            <i>Software Specialist</i>
          </p>
          <ul>
            <li>
              Collaborate on a team to process data from EEG headsets and identify imagined movement 
              through various machine learning algorithms
              <ul>
                <br/>
                <li>
                  Software involved preprocessing, feature extraction and selection, and classification of data
                </li>
              </ul>
            </li>
            <br/>
            <li>
              Aid in development of games that would be controlled by identification of corresponding imagined movement
            </li>
            <br/>
            <li>
              Integrate the signal processing software with games
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--post-office"
          date = "July 2020 - August 2021"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Finch Midland Pharmacy
          </h3>
          <p>
            <i>Canada Post Clerk</i>
          </p>
          <ul>
            <li>
              Detail service for customers who want to send packages or letters through Canada Post
            </li>
            <br/>
            <li>
              Effectively identify and explain the features, benefits, and options of each product
            </li>
            <br/>
            <li>
              Process transactions for each product and service through a point of service system
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