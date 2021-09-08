import React from "react";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a rel={"external"} href="/">
        <div className="home">DataGrad</div>
      </a>
      <div className="right">
      <a rel={"external"} href="/how">
          <div id="item">HOW TO USE</div>
        </a>

        <a rel={"external"} href="/questions">
          <div id="item">EXPLORE</div>
        </a>

        <a rel={"external"} href="/contact">
          <div id="item">CONTACT</div>
        </a>
        <a rel={"external"} href="/team">
          <div id="item">TEAM</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
