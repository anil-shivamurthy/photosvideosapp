import React from "react";
import "./banner.css";
import Search from "./search";
import PropTypes from "prop-types";

const Banner = (props) => {

  if (props.photos === undefined) {
    var imgUrl =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoolbackgrounds.io%2Fblack-background%2F&psig=AOvVaw1ZRXx36PnBZbcB25KW99h3&ust=1613300623607000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDt3qbb5u4CFQAAAAAdAAAAABAD";
  } else {
    imgUrl = props.photos[0].src.landscape
      ? props.photos[0].src.landscape
      : props.photos[0].src.landscape;
  }
  var divStyle = {
    backgroundImage: "url(" + imgUrl + ")",
  };

  return (
    <div className="banner-image" style={divStyle}>
      <Search />
    </div>
  );
};

Banner.propTypes = {
  photos: PropTypes.any,
};

export default Banner;
