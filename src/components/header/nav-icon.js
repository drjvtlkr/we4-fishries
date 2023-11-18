import React from "react";
import classes from "./nav-icon.module.css";

const NavIcon = (props) => {
  return (
    <div className={classes["nav-icon"]}>
      <p>{props.title}</p>
    </div>
  );
};

export default NavIcon;
