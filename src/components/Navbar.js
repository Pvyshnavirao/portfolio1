import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  const closeNavbar = () => {
    setExpandNavbar(false);
  };

  useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <div className={`navbar ${expandNavbar ? "open" : "close"}`}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" onClick={closeNavbar} className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/skills" onClick={closeNavbar} className={location.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
        <Link to="/projects" onClick={closeNavbar} className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/experience" onClick={closeNavbar} className={location.pathname === '/experience' ? 'active' : ''}>
          Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
