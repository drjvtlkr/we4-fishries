import React from "react";
import classes from "./title.module.css";

const Title = (props) => {
  return <div className={classes.title}>{props.children}</div>;
};

export default Title;
