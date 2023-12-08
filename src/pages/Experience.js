import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/experience.css";
import { motion } from 'framer-motion';
function Experience() {
  return (
    <motion.div className="experience"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2022"
          iconStyle={{ background: "#3e497a", color: "#bff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MallaReddy School of Engineering, Hyderabad, Telangana
          </h3>
          <p>Bachelor's degree in computer science and engineering </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2022"
          iconStyle={{ background: "#e9d35b", color: "#bff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Wipro, Hyderabad, India
          </h3>
          <p>
            Worked as an aFull Stack Developer for a period of 2 months  and had
            hands on technologies
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2024"
          iconStyle={{ background: "#3e497a", color: "#bff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Saint Louis University, Saint Louis , Missouri
          </h3>
          <p>Master's degree in Computer Science </p>
        </VerticalTimelineElement>
   

      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023"
          iconStyle={{ background: "#e9d35b", color: "#bff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Excelerate, Saint Louis,Missouri
          </h3>
          <p>
            Worked as a Data visualization Intern. Gained knowledge on data
            visualization tools such as Powerbi . Created insights on data for better analysis.
           
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023"
          iconStyle={{ background: "#e9d35b", color: "#bff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Graduate Teaching Assistant , Saint Louis University.
          </h3>
          <p>
            Worked as a Teaching Assistant for Web Technologies Course. 
           
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </motion.div>
  );
}

export default Experience;
