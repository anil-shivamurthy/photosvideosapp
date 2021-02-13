import React from "react";
import './content.css';

const Content = (props) => {
  return (
    <div className="content">
        {props.photos.map((index, image) => (
         <img className="photos" key={index} src={image.url} alt="cards" />
        ))}
    </div>
  );
};

export default Content;
