import React from "react";
import "./team.css";
import Sidebar from "../Sidebar/sidebar";
import ParticleComponent from "../Particles/particles";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Navbar from "../Navbar/navbar";
import { AiFillHeart } from "react-icons/ai";
import akshat from "../assets/akshat.png";
import ayush from "../assets/ayush.png";
import khushee from "../assets/khushee.png";
import shourya from "../assets/shourya.png";
import suryaansh from "../assets/suryaansh.png";

export default function Team() {
  const people = [
    {
      image: khushee,
      name: "Khushee Kapoor",
      quote:
      "I am a Data Science Sophomore who loves to process, model, and analyze data to solve real-world problems and create a better world for all.",

      github: "https://github.com/khusheekapoor",
      linkedin: "https://www.linkedin.com/in/khusheekapoor/",
      instagram: "https://www.instagram.com/khushee._.kapoor/",
    },

    {
      image: shourya,
      name: "Shourya Gupta",
      quote:
        "I am a Computer Science Sophomore interested in Full Stack Web Development, and working to hone skills in Data Science and Machine Learning. Cricket and chai, nothing more I aspire.",
      github: "https://github.com/shourya2002-geek",
      linkedin: "https://www.linkedin.com/in/shourya-gupta-80237b1b9/",
      instagram: "",
    },

    {
      image: suryaansh,
      name: "Suryaansh Rathinam",
      quote:
        "A Computer Science Sophmore and an aspiring Full-Stack Web Developer. Always looking forward to learning new stuff and working on projects. ",
      github: "https://github.com/suryaansh2002",
      linkedin: "https://www.linkedin.com/in/suryaansh-rathinam-33a86b1b6/",
      instagram: "https://www.instagram.com/suryaansh2807/",
    },

    {
      image: ayush,
      name: "Ayush Batra",
      quote:
        "Motivated college sophomore with a keen interest in machine learning and robotics. Passionate about learning new things and an avid football fan. Strong advisor of free education throughout the whole world.",
      
        github: "https://github.com/Ayush-Batra",
      linkedin: "https://www.linkedin.com/in/ayush-batra-18959b200/",
      instagram: "https://www.instagram.com/ayush.batra_/",
    },
    {
      image: akshat,
      name: "Akshat Ajay Das",
      quote:
        "I am an 18 y/o Engineering undergrad with a passion for all things tech-related and have a keen interest in Web Development. Love automating tasks and am always learning",
      github: "https://github.com/Akshat-Das",
      linkedin: "https://www.linkedin.com/in/akshat-das",
      instagram: "https://www.instagram.com/akshat_das/",
    },
  ];

  return (
    <div className="contain">
      <Sidebar />

      <ParticleComponent />
      <Navbar />

      <div className="main">
        <div className="header">Our Team</div>

        {people.map((person) => (
          <div className="card">
            <div className="image">
              <img src={person.image} alt="profile" className="profile-img" />
            </div>
            <div className="name">{person.name}</div>
            <div className="quote">{person.quote}</div>
            <div className="social">
              <a href={person.github} rel="noreferrer" target="_blank">
                <AiFillGithub size={35} />
              </a>
              <a href={person.linkedin} rel="noreferrer" target="_blank">
                <AiFillLinkedin size={35} />
              </a>
              {person.instagram ? (
                <a href={person.instagram} rel="noreferrer" target="_blank">
                  <AiFillInstagram size={35} />
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
        <div className="name">
          Made with <AiFillHeart /> by DataGrad
        </div>
      </div>
    </div>
  );
}
