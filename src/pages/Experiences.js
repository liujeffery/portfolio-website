import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {School, Work, RocketLaunch, LocalPharmacy, MedicalInformation, Bolt} from "@mui/icons-material";

import "react-vertical-timeline-component/style.min.css";
import "../styles/Experiences.css"

function Experiences() {
  return (
    <div className="experiences" id="experiences">
      <h1>Experiences</h1>
      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement 
          className = "vertical-timeline-element--university"
          date = "September 2021 - April 2027"
          dateClassName="date"
          iconStyle = {{background: "#3e497a", color: "#fff"}}
          icon={<School />}
        >
          <h3 className = "vertical-timeline-element-title">
            McMaster University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hamilton, Ontario
          </h4>
          <p>
            <i>Candidate for B.E in Software Engineering, 3.85 GPA</i> <br/>
            Relevant courses:
          </p>
          <ul className="courses">
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
          <h4 className="vertical-timeline-element-subtitle">
            Tokyo, Japan
          </h4>
          <p>
            <i>Exchange, School of Fundamental Science and Engineering</i> <br/>
            Relevant courses:
          </p>
          <ul className="courses">
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
          className = "vertical-timeline-element--hydro-one"
          date = "May 2025 - August 2026"
          dateClassName="date"
          iconStyle = {{background: "#e9d35b", color: "#fff"}}
          icon={<Bolt />}
        >
          <h3 className = "vertical-timeline-element-title">
            Hydro One
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, Ontario
          </h4>
          <p>
            <i>Software Intern</i>
          </p>
          <ul>
            <li>
              Built a tool using <b>Python</b> and <b>quantized LLMs</b> to preprocess, batch, and generate summaries from shift logs, reducing
              manual work by <b>90 hours a month</b> and token-related costs by <b>60%</b>
            </li>
            <br/>
            <li>
              Used SQL and Python to compile <b>15+ monthly reports</b> and eliminate a manual 
              ticketing system, reducing work by <b>30 hours a month</b>
            </li>
            <br/>
            <li>
              Created a <b>web-based script</b> using <b>Selenium</b> to automate bulk changes to
              <b> 1000+ devices</b>, reducing manual work by <b>40 hours a month</b> and eliminating
              <b> $1000 a month</b> in third-party fees
            </li>
            <br/>
            <li>
              Debugged and modernized an alignment tool between <b>SAP</b> and third-party software using <b>Visual Basic</b> and <b>Powershell</b>,
              processing over <b>200 entries a month</b>
            </li>
            <br/>
            <li>
              Administrate software to manage over <b>52000</b> critical control, protection, 
              and monitoring devices across Ontario
            </li>
            <br/>
            <li>
              Consolidated over <b>100 pages</b> of scattered documentation into a single, hyperlinked knowledge hub, 
              slashing file volume by <b>60%</b> and reducing information retrieval time by <b>50%</b>
            </li>
          </ul>
          <ul className="skills">
            <li>Python</li>
            <li>SQL</li>
            <li>HuggingFace</li>
            <li>Large Lanuguage Models (LLMs)</li>
            <li>NLP</li>
            <li>Selenium</li>
            <li>SAP</li>
            <li>Visual Basic</li>
            <li>Git</li>
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
          <h4 className="vertical-timeline-element-subtitle">
            Hamilton, Ontario
          </h4>
          <p>
            <i>Software Specialist</i>
          </p>
          <ul>
            <li>
              Developed <b>control centre software</b> in <b>React</b> and <b>Flask</b> to <b>receive, visualize, and send</b> data in real-time
            </li>
            <br/>
            <li>
              Standardized firmware unit testing betweeen <b>Linux</b>, <b>Windows</b>, and <b>macOS</b> environments by containerizing the test
              environment in <b>Docker</b> and deploying it via <b>Github self-hosted runners</b>, reducing test setup time by <b>70%</b>
            </li>
            <br/>
            <li>
              Consolidated disjointed legacy APIs into a lightweight <b>JSON RPC 2.0</b> bridge between <b>Python</b> and <b>Electron</b>, reducing<br/>
              <b>maintenance and development</b> times by <b>66%</b> and computational overhead by <b>50%</b>
            </li>
            <br/>
            <li>
              Created a <b>CI/CD pipeline</b> with <b>Github Actions</b> and <b>CMake</b> to automate <b>C/C++ unit testing</b>, reducing <b>30 hours of work monthly</b>
            </li>
            <br/>
            <li>
              Team successfully launched satellite to <b>International Space Station</b> as part of NEUDOSE mission
            </li>
          </ul>
          <ul className="skills">
            <li>Javascript</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>React</li>
            <li>CMake</li>
            <li>Electron</li>
            <li>Flask</li>
            <li>REST APIs</li>
            <li>C Unit Tests</li>
            <li>Github Actions</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Linux OS</li>
            <li>Bash</li>
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
          <h4 className="vertical-timeline-element-subtitle">
            Waterloo, Ontario
          </h4>
          <p>
            <i>Software Engineering Research Assistant</i>
          </p>
          <ul>
            <li>
              Created core functionality features for critical company projects worth over <b>$700,000</b> by developing <b>convolutional</b>
              , <b>recurrent</b>, and <b>LSTM machine learning models</b> using <b>Tensorflow</b>, <b>Keras</b>, and <b>PyTorch</b>
            </li>
            <br/>
            <li>
              Reduced development time by <b>40%</b> by spearheading implementation of <b>end-to-end pipelines</b> for <b>core landmark
              detection models</b> using <b>Python</b>
            </li>
            <br/>
            <li>
              Developed a <b>graph neural network</b> for optimized feature extraction using DGL, improving model accuracy by <b>25%</b><br/>
              and reducing computational demand of model by <b>30%</b>
            </li>
            <br/>
            <li>
              Engineered data preprocessing pipeline <b>(imputation, feature extraction)</b> in <b>NumPy</b> to process over <b>1,000,000</b> data
              signals, cutting processing time by <b>90 hours/month</b>
            </li>
            <br/>
            <li>
              Wrote over <b>60 pages</b> of <b>technical documentation</b> to maintain <b>clean and structured</b> codebases and processes, to
              be read by over <b>45 stakeholders and team members</b>
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
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, Ontario
          </h4>
          <p>
            <i>Technical Analyst</i>
          </p>
          <ul>
            <li>
              Reduced sector-wide permissions search times by <b>75%</b> by creating a <b>custom internal management tool </b>and implementing
              asynchronous updates, using <b>Java</b>, <b>Powershell</b>, and <b>Atlassian Jira</b> workflow
            </li>
            <br/>
            <li>
              Eliminated <b>45 hours a month</b> of team-wide tasks on critical server by replacing the existing manual check with an
              automated service notification project, using <b>Python</b>
            </li>
            <br/>
            <li>
              Resolved and escalated over <b>900 service tickets a month</b> to monitor <b>critical infrastructure operations</b>
            </li>
          </ul>
          <ul className="skills">
            <li>Python</li>
            <li>Java</li>
            <li>AtlassianJira</li>
            <li>ServiceNow</li>
            <li>Java Swing</li>
            <li>Bash</li>
            <li>Agile/Scrum</li>
            <li>Git</li>
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
          <h4 className="vertical-timeline-element-subtitle">
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