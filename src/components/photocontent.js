import React, { useEffect, useState } from "react";
import "./photocontent.css";

const Photocontent = (props) => {
  return (
    <div className="content">
      {props.photos.map((index, image) => (
        <img key={index} src={image.url} className="photos" />
      ))}
    </div>
  );
};

export default Photocontent;
