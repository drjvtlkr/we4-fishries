import React from "react";
import classes from "./our-gallery.module.css";
import GalleryItem from "./gallery-item";
import galleryImage1 from "../../assets/gallery1.png";
import galleryImage2 from "../../assets/gallery2.png";
import galleryImage3 from "../../assets/gallery3.png";
import galleryImage4 from "../../assets/gallery4.png";
import galleryImage5 from "../../assets/gallery5.png";
import galleryImage6 from "../../assets/gallery6.png";
import galleryImage7 from "../../assets/gallery7.png";
import galleryImage8 from "../../assets/gallery8.png";
import galleryImage9 from "../../assets/gallery9.png";

const OurGallery = (props) => {
  return (
    <div className={classes.gallery} id="FreshWaterFish">
      <p className={classes.header}>OUR GALLERIES</p>
      <p className={classes.content}>
        Welcome to the "We 4 Fishery Gallery". Explore the breathtaking moments,
        successful catches and the natural beauty of our fishing adventures
        captured through the lens of our clients and our team.
      </p>
      <div className={classes["image-section"]}>
        <GalleryItem src={galleryImage1} />
        <GalleryItem className={classes["large-image"]} src={galleryImage2} />
        <GalleryItem src={galleryImage3} />
        <GalleryItem src={galleryImage4} />
        <GalleryItem src={galleryImage5} />
        <GalleryItem src={galleryImage6} />
        <GalleryItem src={galleryImage7} />
        <GalleryItem src={galleryImage8} />
        <GalleryItem src={galleryImage9} />
      </div>
    </div>
  );
};

export default OurGallery;
