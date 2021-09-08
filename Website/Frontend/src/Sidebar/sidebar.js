import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="how" className="menu-item" href="/how">
          How To Use
        </a>

        <a id="questions" className="menu-item" href="/questions">
          Explore
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="team" className="menu-item" href="/team">
          Team
        </a>
      </Menu>
    );
  }
}

export default Sidebar;
