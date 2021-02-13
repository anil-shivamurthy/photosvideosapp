import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("photo");

  const handleClick = (e) => {
    document.getElementById(e.target.id).classList.add("active");
  };

  return (
    <div className="navbar">
      <span
        id="photo"
        // active={active === "photo"}
        className="photo active"
        onClick={(e, id) => handleClick(e, id)}
      >
        Photos
      </span>
      <span
        id="video"
        // active={active === "video"}
        className="video"
        onClick={(e, id) => handleClick(e, id)}
      >
        Videos
      </span>
      <span
        id="favourite"
        // active={active === "favourite"}
        className="favourite"
        onClick={(e, id) => handleClick(e, id)}
      >
        Favourites
      </span>
    </div>
  );
};

export default Navbar;
