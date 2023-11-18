import React from "react";
import fish1 from "../../assets/fish 1.png";
import classes from "./welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={classes.welcome} id="About">
      <img src={fish1} alt="fish1" />
      <div className={classes.text}>
        <h1>Welcome to We 4 Fishery</h1>
        <p>
          At We 4 Fishery, we are dedicated to provide exceptional fishing
          experiences and services to out clients. Our commitment to sustainable
          fishing practices and the love of the sea make us your ideal partner
          for memorable fishing adventures.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
