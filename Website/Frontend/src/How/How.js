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
          <ul className="how-list">
            <li>
              The Home Page of the Platform showcases DataGrad's Logo and is
              connected to the Explore, How to Use, Contact, and Team pages.
            </li>
            <li>
              The Explore Page has two options for optimization. High
              Optimization refers to the skills which have the highest number of
              courses in our database.
            </li>
            <li>
              If the user opts for High Optimization, they have to select the
              skill they want to learn and their level from the select boxes. In
              case they have done any previous course related to the skill, they
              may enter that in order to get similar courses.
            </li>
            <li>
              If the user opts not to go for High Optimization, they have to
              enter the skill they want to learn and select their level from the
              select box.
            </li>
            <li>
              In either case, when the user selects/enters the options in the
              relevant fields, the courses are suggested as follows:
            </li>
            <li>
              Behind every card, when the user clicks on the 'Check Out More'
              option, more courses offfered by the University are displayed as
              follows. The user can toggle back using the 'Back to Course'
              option.
            </li>
            <li>
              The Contact Page is for the users to write us their queries. We
              are still expanding our database, so if the courses recommended do
              not match one's expectations, we would really appreciate if they
              send us your query through the contact form and become a part of
              our family.
            </li>
          </ul>
        </div>
      </div>
      <div className="name">
        Made with <AiFillHeart /> by DataGrad
      </div>
    </div>
  );
}
