import React, { useState } from "react";
import classes from "./fishing-type.module.css";

const FishingType = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverIn = () => {
    setIsHovered(true);
  };
  const hoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={classes["fishing-type"]}
      onMouseOver={hoverIn}
      onMouseOut={hoverOut}
    >
      <img className={classes["fishing-type__img"]} src={props.src} alt="" />
      <div className={`${isHovered ? classes.overlay : classes.hide}`}>
        <p className={classes.description}>
          Fly fishing is an angling technique that uses a ultralight-weight lure
          called an artificial fly, which typically mimics small invertebrates
          such as flying
        </p>
        <div className={classes.footer}>
          <p className={classes["logo-title"]}>{props.title}</p>
          <img className={classes.logo} src={props.logo} alt="logo3" />
        </div>
      </div>
    </div>
  );
};

export default FishingType;
