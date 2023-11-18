import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import classes from "./header.module.css";

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleIconHandler = () => {
    setIsClicked((state) => !state);
  };
  const icon = isClicked ? (
    <i onClick={toggleIconHandler} className="fas fa-times"></i>
  ) : (
    <i onClick={toggleIconHandler} className="fas fa-bars"></i>
  );

  const navbarClasses = `${
    isClicked ? classes.navbar + " " + classes.active : classes.navbar
  }`;

  return (
    <>
      <nav className={classes.nav}>
        <div></div>
        <div className={classes.mobile}> We 4 Fishery</div>
        <ul className={navbarClasses}>
          <Link className={classes.link} to="#Home" onClick={toggleIconHandler}>
            <li>Home</li>
          </Link>
          <Link
            className={classes.link}
            to="#About"
            onClick={toggleIconHandler}
          >
            <li>About</li>
          </Link>
          <Link
            className={classes.link}
            to="#Contact"
            onClick={toggleIconHandler}
          >
            <li>Contact</li>
          </Link>
          <Link
            className={classes.link}
            to="#SeaFish"
            onClick={toggleIconHandler}
          >
            <li>Sea Fish</li>
          </Link>
          <Link
            className={classes.link}
            to="#FreshWaterFish"
            onClick={toggleIconHandler}
          >
            <li>Fresh Water Fish</li>
          </Link>
        </ul>
        <div className={classes.mobile}>{icon}</div>
      </nav>
    </>
  );
};

export default Header;
