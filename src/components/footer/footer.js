import React from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import facebookIcon from "../../assets/facebookIcon.png";
import googleIcon from "../../assets/googleIcon.png";
import instaIcon from "../../assets/instaIcon.png";

import classes from "./footer.module.css";
import Title from "./title";

const Footer = (props) => {
  return (
    <div className={classes.footer} id="Contact">
      <img className={classes.logo} src={logo} alt="logo" />
      <div className={classes["footer-option"]}>
        <Title>Office</Title>
        <p>v4fishery@gmail.com</p>
        <p>+91-9775645565</p>
      </div>
      <div className={classes["footer-option"]}>
        <Title>Links</Title>
        <p>Products</p>
        <p>Contact</p>
      </div>
      <div className={classes.newsletter}>
        <Title>Newsletter</Title>
        <div className={classes["input-container"]}>
          <input type="email" placeholder="Your mail ID" />
          <img src={arrow} alt="" />
        </div>
        <div className={classes["social-icons"]}>
          <img src={facebookIcon} alt="" />
          <img src={googleIcon} alt="" />
          <img src={instaIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
