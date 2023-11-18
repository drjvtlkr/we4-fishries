import React from "react";
import startingBanner from "../../assets/starting banner.jpg";
import classes from "./starting-banner.module.css";

const StartingBanner = (props) => {
  return (
    <div className={classes.banner}>
      <img src={startingBanner} alt="banner" />
    </div>
  );
};

export default StartingBanner;
