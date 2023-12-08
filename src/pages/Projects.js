import React from "react";
import "../styles/Projects.css";
import GithubIcon from "@material-ui/icons/GitHub";
import { motion } from 'framer-motion';
function Projects() {
  return <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}>
    <h1>
      1.PORTFOLIO 
    </h1>
    <a
            href="https://pvyshnavirao.github.io/Portfolio/homepage.html"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon /> Github link for the project 
          </a>
          <p>
            Project Built to show case my skils , Background and Experience . <br></br>
            Technologies Used : JavaScript , HTML , CSS
          </p>
  </motion.div>;
}

export default Projects;
