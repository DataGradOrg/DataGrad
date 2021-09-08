import React from "react";
import "./front.scss";
import ParticleComponent from "../Particles/particles";
import { AiFillHeart } from "react-icons/ai";
import Sidebar from "../Sidebar/sidebar";

const Front = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "200vh",
      }}
    >
      <Sidebar />

      <ParticleComponent />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          color: "white",
        }}
        className="front"
      >
        <div className="navbar">
          <a rel={"external"} href="/">
            <div className="home">DataGrad</div>
          </a>
          <div className="right">
          <a rel={"external"} href="/how">
          <div id="item">HOW TO USE</div>
        </a>

            <a rel={"external"} href="/questions">
              <div className="item">EXPLORE</div>
            </a>

            <a rel={"external"} href="/contact">
              <div className="item">CONTACT</div>
            </a>
            <a rel={"external"} href="/team">
              <div className="item">TEAM</div>
            </a>
          </div>
        </div>
        <div className="content"></div>
      </div>

      <div
        style={{
          position: "absolute",

          width: "100%",
          height: "100vh",
          color: "white",
        }}
        className="us"
      >
        <div className="content1">
          <div className="aboutus">Our Vision</div>

          <div class="container">
            With the availability of numerous paid and free resources on the
            internet, it becomes overwhelming for students to learn new skills.
            DataGrad aims to bridge the gap between top MOOCs like Coursera,
            Udacity, EdX, and students eager to learn
            new skills. One only has to enter their level and the skill they
            want to learn, and DataGrad presents the Top 5 relevant courses
            curated carefully, based on the skill, picked from various sites
            to them.
          </div>

          <div className="name">
            Made with <AiFillHeart /> by DataGrad
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
