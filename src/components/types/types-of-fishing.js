import classes from "./types-of-fishing.module.css";
import type1Img from "../../assets/type1.png";
import type2Img from "../../assets/type2.png";
import type3Img from "../../assets/type3.png";
import FishingType from "./fishing-type";
import type1logo from "../../assets/type1 logo.png";
import type2logo from "../../assets/type2 logo.png";
import type3logo from "../../assets/type3 logo.png";

const TypesOfFishing = (props) => {
  return (
    <div className={classes.types} id="SeaFish">
      <p className={classes.header}>TYPES OF FISHING</p>
      <p className={classes.content}>
        Just of the top of our heads we at Captain Experiences HQ listed shore
        fishing (or bank fishing, beach fishing, surfcasting), dropling,
        handling, net fishing (including gill net fishing, cast net fishing),
        ice fishing, jigging, kayak fishing, kite fishing, longlining noodling,
        trapping, drone fishing
      </p>
      <div className={classes["image-section"]}>
        <FishingType
          src={type1Img}
          logo={type1logo}
          title="Recreational Fishing"
        />
        <FishingType src={type2Img} logo={type2logo} title="Fly Fishing" />
        <FishingType src={type3Img} logo={type3logo} title="Trawling" />
      </div>
    </div>
  );
};

export default TypesOfFishing;
