import React from "react";
import classes from "./our-clients.module.css";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";

const OurClients = (props) => {
  return (
    <div className={classes.clients}>
      <p className={classes.header}>OUR CLIENTS</p>
      <p className={classes.content}>
        Thank you for choosing We 4 Fishery for your fishing adventures. We look
        forward to hearing and sharing more incredible stories from our clients.
      </p>
      <div className={classes["image-section"]}>
        <img src={client1} alt="client1" />
        <img src={client2} alt="client2" />
        <img src={client3} alt="client3" />
      </div>
    </div>
  );
};

export default OurClients;
