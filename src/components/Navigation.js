import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navLinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/bio"}>Bio</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default Navigation;
