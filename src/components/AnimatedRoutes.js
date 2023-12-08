import react from 'react';
import {  Routes, Route , useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";

import {AnimatePresence} from 'framer-motion';


function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes;