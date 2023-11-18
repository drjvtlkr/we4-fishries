import React, { useRef } from "react";
import classes from "./action-buttons.module.css";

const ActionButtons = (props) => {
  const classname1 = `${classes.button} ${classes.contact}`;
  const classname2 = `${classes.button} ${classes.gallery}`;

  const contactButtonRef = useRef();
  const galleryButtonRef = useRef();

  const contactButtonClickHandler = (event) => {
    console.log("clicked!!");
    props.onClick(contactButtonRef.current);
  };

  const galleryButtonClickHandler = (event) => {
    props.onClick(galleryButtonRef.current);
  };

  return (
    <div className={classes["action-buttons"]}>
      <button
        ref={contactButtonRef}
        onClick={contactButtonClickHandler}
        className={classname1}
      >
        Contact Now
      </button>
      <button
        ref={galleryButtonRef}
        onClick={galleryButtonClickHandler}
        className={classname2}
      >
        Our Galleries
      </button>
    </div>
  );
};

export default ActionButtons;
