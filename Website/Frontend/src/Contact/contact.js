import React, { useState } from "react";
import "./contact.css";
import ParticleComponent from "../Particles/particles";
import { RiAccountCircleFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import Sidebar from "../Sidebar/sidebar";
import { AiOutlineArrowRight, AiFillHeart } from "react-icons/ai";
import Navbar from "../Navbar/navbar";

const Contact = () => {
  return (
    <div className="contain-contact">
      <Sidebar />

      <ParticleComponent />
      <Navbar />

      <div className="main-contact">
        <div class="heading">
          <h1>
            <strong>Contact Us</strong>
          </h1>
          <p>We'd love to hear from you!</p>
        </div>
        <form
          className="form-contact"
          action="https://formsubmit.co/contact.datagrad@gmail.com"
          method="POST"
          name="myForm"
          autocomplete="on"
        >
          <div>
            <input
              type="hidden"
              name="_subject"
              value="Contact form from DataGrad"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://datagrad.netlify.app/submit.html"/>

            <input
              type="text"
              name="First Name"
              id="fname"
              placeholder="First Name"
              required
              className="input-contact"
            ></input>
            <input
              type="text"
              name="Last Name"
              id="lname"
              placeholder="Last Name"
              required
              className="input-contact"
            ></input>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email Address"
              required
              className="input-contact"
            ></input>

            <input
              type="number"
              name="Phone Number"
              id="phno"
              placeholder="Your Phone Number"
              required
              className="input-contact"
            ></input>
            <textarea
              id="msg"
              name="Message"
              rows="4"
              cols="30"
              placeholder="Enter Your Message"
              required
              className="input-contact"
            ></textarea>
          </div>
          <div class="submitbut">
            <input
              type="submit"
              value="SUBMIT"
              id="submit"
              className="input-contact"
            />
          </div>
        </form>
      </div>
      <div className="name">
        Made with <AiFillHeart /> by DataGrad
      </div>
    </div>
  );
};

export default Contact;
