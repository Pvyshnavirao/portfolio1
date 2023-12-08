
import React from "react";
import BarChart from "../components/BarCharts";
import "../styles/Skills.css";
import { motion } from 'framer-motion';
 function Skills(){
     return (
         <motion.div className="skills"
         initial={{opacity:0}}
         animate={{opacity:1}}
         exit={{opacity:0}}> 
         <h1> Skills</h1>
         <BarChart />

 <ol className="list"> 
 <li className="item"> 
 <h2> Front-End</h2> <span> HTML, CSS,  BootStrap </span> 
 </li> <li className="item"> 
 <h2>Back-End</h2> 
 <span>NodeJS, MySQL </span> 
 </li> <li className="item"> 
 <h2>Languages</h2> 
 <span>JavaScript, Java, Python, C++ </span>
  </li> </ol> 
  
  </motion.div> 
  ); 
  }
 export default Skills;
