import React from "react";
import "./How.css";
import ParticleComponent from "../Particles/particles";
import { RiAccountCircleFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import Sidebar from "../Sidebar/sidebar";
import { AiOutlineArrowRight, AiFillHeart } from "react-icons/ai";
import Navbar from "../Navbar/navbar";

export default function How() {
  return (
    <div className="contain-how">
      <Sidebar />

      <ParticleComponent />
      <Navbar />

      <div className="main-how">
        <div class="heading">
          <h1>
            <strong>How To Use</strong>
          </h1>
        </div>
        <div>
          <ol className="how-list">
            The main purpose of DataGrad is to integrate the services of various
            MOOC platforms , so that you don't feel overwhelmed to find the
            course of your choice!
            <li>
              The Landing page serves as your gateway to explore courses
              specially curated for you from three of the major MOOC platforms.
              The Sidebar/Navbar redirects to various sections of the
              application.
            </li>
            <li>
              As you visit the "Explore" page, you will have two modes of
              optimisation with you, i.e, Low and High.The default option is set
              on High, and you can alter it using the radio button provided.
            </li>
            <li>
              The High optimisation mode provides an exhaustive list of skills
              to choose from, in the selctbox, which are majorly related to the
              Computer Science and related domains ( we are constantly expanding
              our database, and currently the number of courses related to
              domains such as, Robotics, Electronics, Mechanical,
              Mechatronics,etc, are low in number). Further you are required to
              specify your level of expertise. The third field is an optional
              one, and it is your discretion to specify any keywords related to
              the skill, so that the recommendations for you are optimized by
              our custom Recommendation Engine running on the backend.
              <br />
              So, for example, you select "Cybersecurity" and "Intermediate"
              from the options given , and further specify a keyword such as
              "Network security"(related to cybersecurity), the model would get
              optimized and would try to fetch courses from all the platforms,
              to suit your needs.
              <br />
              If by any chance, the recommendations are not accurate, try
              specifying some more accurate keywords or even try changing the
              levels of difficulty
            </li>
            <li>
              Moving on, if you intend to explore some skills apart from the
              ones given in the default options, the "Low optmization" mode is
              meant for you. Just select "No" in the radio button. Further, you
              specify the skill you intend to learn and your level of expertise.
              <br />
              DISCLAIMER: The Low optimisation mode is specially created for
              users to explore skills not given in the default options. Since
              our database is limited for now, the recommendations for some
              skills might not be highly optimized.
            </li>
            <li>
              At the end, when you click on "Submit" , the Top 5 courses from
              the platforms appear for you to select from. Based on the Title,
              Course Description and its Rating, you can select any, and further
              would be redirected to the specific platform. Clicking on
              "Checkout More" option , shows course titles offered by the
              particular institute.
            </li>
          </ol>
        </div>
      </div>
      <div className="name">
        Made with <AiFillHeart /> by DataGrad
      </div>
    </div>
  );
}
