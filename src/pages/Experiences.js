import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {School, Work, RocketLaunch, LocalPharmacy, MedicalInformation} from "@mui/icons-material";

import "react-vertical-timeline-component/style.min.css";
import "../styles/Experiences.css"

function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <h1>Experiences</h1>
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--university"
          date = "September 2021 - present"
          dateClassName="date"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster University
          </h3>
          <br/>
          <p>
            <i>Candidate for B.E in Software Engineering</i> <br /><br/>
            Cumulative GPA: 3.87 <br /><br/>
            Relevant courses:
          </p>
          <ul>
            <li>
              Data Structures & Algorithms <b>(A+)</b>
            </li>
            <br/>
            <li>
              Software Engineering Practice & Experience <b>(A+)</b>
            </li>
            <br/>
            <li>
              Digital Systems & Interfacing <b>(A)</b>
            </li>
            <br/>
            <li>
              Object Oriented Programming <b>(A)</b>
            </li>
          </ul>
          </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--healthcare-r&a"
          date = "May 2023 - present"
          dateClassName="date"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<MedicalInformation />}
        >
          <h3 className = "vertical-timeline-element-title">
            Healthcare Systems R&A
          </h3>
          <p>
            <i>Software Engineering Research Assistant</i>
          </p>
          <ul>
            <li>
              Applied <b>machine learning</b> methodologies to complete critical company projects across two teams
            </li>
            <br/>
            <li>
              Designed, developed, and tested end-to-end pipelines for <b>neural networks</b>, simplifying workflow and increasing productivity for team members
            </li>
            <br/>
            <li>
              Implemented algorithms for <b>data imputation</b>, <b>preprocessing</b>, and <b>feature extraction</b>
            </li>
            <br/>
            <li>
              Wrote and maintained documentation for software processes as part of a term report for stakeholders
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
          <ul className="skills">
            <li>Machine Learning</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>SciKit Learn</li>
            <li>Numpy</li>
            <li>Python</li>
            <li>MATLAB</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--cibc"
          date = "May 2022 - August 2022"
          dateClassName="date"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<Work />}
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
              Aided in creation and planning of automation project that would reduce manual work by <b>45 hours a
              month</b>, using Python
            </li>
            <br/>
            <li>
              Independently designed, scheduled, and delegated tasks using <b>Agile methodology</b>, working closely
              with project managers and other team members in development
            </li>
          </ul>
          <ul className="skills">
            <li>ServiceNow</li>
            <li>Java Swing</li>
            <li>Jira</li>
            <li>Bash</li>
            <li>Java</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--mist"
          date = "May 2023 - present"
          dateClassName="date"
          iconStyle = {{background: "#004226", color: "#fff"}}
          icon={<RocketLaunch />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster Interdisciplinary Satellite Team
          </h3>
          <p>
            <i>Software Specialist</i>
          </p>
          <ul>
            <li>
              Develop and test integral software and firmware as a member of the payload subteam
            </li>
            <br/>
            <li>
              Assist in development of <b>control centre software</b> to <b>receive, visualize, and send</b> data in real-time
            </li>
            <br/>
            <li>
              Collaborate with subteams to ensure software meets mission requirements
            </li>
            <br/>
            <li>
              Team successfully launched satellite to <b>International Space Station</b> as part of NEUDOSE mission
            </li>
          </ul>
          <ul className="skills">
            <li>React</li>
            <li>Javascript</li>
            <li>CMake</li>
            <li>C Unit Tests</li>
            <li>Python</li>
            <li>C</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--post-office"
          date = "July 2020 - August 2021"
          dateClassName="date"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<LocalPharmacy />}
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
      </VerticalTimeline>
    </div>
  )
}

export default Experiences