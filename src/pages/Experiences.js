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
          <h4 className="vertical-time-element-subtitle">
            Hamilton, Ontario
          </h4>
          <p>
            <i>Candidate for B.E in Software Engineering</i> <br /><br/>
            Cumulative GPA: 3.87 <br/>
            Relevant courses:
          </p>
          <ul>
            <li>
              Data Structures & Algorithms
            </li>
            <br/>
            <li>
              Software Engineering Practice & Experience
            </li>
            <br/>
            <li>
              Concurrent Systems
            </li>
            <br/>
            <li>
              Databases
            </li>
            <br/>
            <li>
              Digital Systems & Interfacing
            </li>
            <br/>
            <li>
              Object Oriented Programming
            </li>
          </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className = "vertical-timeline-element--university"
          date = "April 2024 - July 2024"
          dateClassName="date"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className = "vertical-timeline-element-title">
            Waseda University
          </h3>
          <h4 className="vertical-time-element-subtitle">
            Tokyo, Japan
          </h4>
          <p>
            <i>Exchange Semester in School of Fundamental Science and Engineering</i> <br /><br/>
            Relevant courses:
          </p>
          <ul>
            <li>
              Operating Systems
            </li>
            <br/>
            <li>
              Reliable Software
            </li>
            <br/>
            <li>
              Data Mining
            </li>
            <br/>
            <li>
              Computer Language Processers
            </li>
            <br/>
            <li>
              Digital System Processing
            </li>
          </ul>
          </VerticalTimelineElement>
        <VerticalTimelineElement 
          className = "vertical-timeline-element--healthcare-r&a"
          date = "May 2023 - April 2024"
          dateClassName="date"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<MedicalInformation />}
        >
          <h3 className = "vertical-timeline-element-title">
            Healthcare Systems R&A
          </h3>
          <h4 className="vertical-time-element-subtitle">
            Waterloo, Ontario
          </h4>
          <p>
            <i>Software Engineering Research Assistant</i>
          </p>
          <ul>
            <li>
              Created various <b>convolution</b>, <b>recurrent</b>, and <b>LSTM machine learning models</b> to complete critical company
              projects across three teams in fast paced environment, using Tensorflow, Keras, and PyTorch
            </li>
            <br/>
            <li>
              Designed, organized, developed, and tested <b>end-to-end pipelines</b> for <b>core landmark detection models</b>,
              reducing development time for team members by <b>40%</b>, using Python
            </li>
            <br/>
            <li>
              <b>In three weeks</b>, created a <b>graph neural network</b> for feature extraction in central pipeline, using DGL
            </li>
            <br/>
            <li>
              Implemented algorithms for <b>data imputation</b>, <b>preprocessing</b>, and <b>feature extraction</b> for all models, using Numpy
            </li>
            <br/>
            <li>
              Wrote and maintained over <b>60 pages of technical documentation</b> for maintenance and usage of software
              processes, to be read by over <b>45 stakeholders and team members</b>
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
            <li>Git</li>
            <li>Deep Graph Learning (DGL)</li>
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
          <h4 className="vertical-time-element-subtitle">
            Toronto, Ontario
          </h4>
          <p>
            <i>Technical Analyst</i>
          </p>
          <ul>
            <li>
              Resolved and escalated over <b>900 service tickets a month</b> to monitor <b>critical infrastructure operations</b>
            </li>
            <br/>
            <li>
              Built <b>internal management tools</b> in <b>Agile workflow</b> to reduce search times by <b>75%</b>, using Java and Powershell
            </li>
            <br/>
            <li>
              Aided in creation and planning of automation project that would reduce manual work by <b>45 hours a
              month</b>, using Python
            </li>
          </ul>
          <ul className="skills">
            <li>ServiceNow</li>
            <li>Java Swing</li>
            <li>Jira</li>
            <li>Bash</li>
            <li>Java</li>
            <li>Agile</li>
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
          <h4 className="vertical-time-element-subtitle">
            Hamilton, Ontario
          </h4>
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
            <li>CMake</li>
            <li>C Unit Tests</li>
            <li>Bash</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>C/C++</li>
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
          <h4 className="vertical-time-element-subtitle">
            Toronto, Ontario
          </h4>
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