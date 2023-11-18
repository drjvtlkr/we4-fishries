import React from "react";
import classes from "./gallery-item.module.css";

const GalleryItem = (props) => {
  const classname = `${classes["gallery-item"]} ${
    props.className ? props.className : ""
  }`;

  return (
    <div className={classname["gallery-item"]}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default GalleryItem;
