import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import "../styles/Home.css";
import SlideShow from "../components/SlideShow";

function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Graduate Student"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 80,
  });

  return (
    <motion.div 
    className="home"

    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="about">
        <h2> Hi, My Name is Vyshnavi Rao P</h2>
        <div className="prompt">
          <p>
            A {text}
            <Cursor />
            with a passion for learning and creating.
          </p>
          <a
            href="https://www.linkedin.com/in/vyshnavi-rao-ponnamaneni-b374541b1/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto:vyshnavirao100@gmail.com ">
            <EmailIcon />
          </a>

          <a
            href="https://github.com/Pvyshnavirao"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>

      </div>
      <h1 class="slideshow">Crafting Success Stories: Showcasing a Portfolio of Work Done Till Date.</h1>
      <SlideShow />
    </motion.div>
  );
}

export default Home;
