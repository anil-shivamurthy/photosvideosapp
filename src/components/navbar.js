import React, { useState } from "react";
import "./navbar.css";
import Photocontent from "./photocontent";
import styled from "styled-components";

const Navbar = (props) => {
  const Heading = styled.span`
    color: ${(props) => (props.active ? "red" : "black")};
    width: 100px;
    height: 25px;
    padding: 10px;
    float: left;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 2px solid ${(props) => (props.active ? "red" : "none")};
  `;

  const [active, setActive] = useState("photo");
  const handleClick = (e) => {
    setActive(e.target.id);
  };

  return (
    <div className="navbar">
      <div className="tabs">
        <Heading
          id="photo"
          active={active === "photo"}
          className="photo"
          onClick={(e, id) => handleClick(e, id)}
        >
          Photos
        </Heading>
        <Heading
          id="video"
          active={active === "video"}
          className="video"
          onClick={(e, id) => handleClick(e, id)}
        >
          Videos
        </Heading>
        <Heading
          id="favourite"
          active={active === "favourite"}
          className="favourite"
          onClick={(e, id) => handleClick(e, id)}
        >
          Favourites
        </Heading>
      </div>
      <div>
        {active === "photo" ? <Photocontent photos={props.photos} /> : null}
        {active === "video" ? <Photocontent photos={props.photos} /> : null}
        {active === "favourite" ? <Photocontent photos={props.photos} /> : null}
      </div>
    </div>
  );
};

export default Navbar;
