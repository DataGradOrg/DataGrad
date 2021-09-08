import React from "react";
import "./questions.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ParticleComponent from "../Particles/particles";
import { AiFillHeart } from "react-icons/ai";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import useLoader from "../Hooks/useLoader";

const QuestionsForm = () => {
  let history = useHistory();

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const skills = [
    "Software Engineering",
    "Programming",
    "Psychology",
    "Cybersecurity",
    "Blockchain",
    "Python",
    "Data Science",
    "Machine Learning",
    "AI",
    "Javascript",
    "App Development",
    "Android Development",
    "UI/UX Design",
    "Database Management",
    "SQL",
    "AWS",
    "Google Cloud",
    "Cloud Computing",
    "Statistics",
    "Business",
    "Marketing",
    "Physics",
    "Music",
    "Biology",
    "Public Health",
    "English",
    "History",

  ];

  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [display, setDisplay] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [ctr, setCtr] = useState(false);
  const [opt, setOpt] = useState(true);
  const [req, setReq]=useState(false);
  const [loader, showLoader, hideLoader] = useLoader();

  const data = JSON.stringify({
    //    name: name,
    skill: skill,
    level: level,
    ctr: ctr,
    keyword: keyword,
  });
  const handleSubmit = (e) => {
    console.log(skill);
    e.preventDefault();
    if (skill === "" || level === "") {
      alert("Please Fill The Fields Correctly");
      return;
    }

    setDisplay(true);

    if (keyword === "") {
      setCtr(false);
    } else {
      setCtr(true);
    }

    showLoader();

    axios
      .post("https://dettolback.herokuapp.com/predict", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        hideLoader();

        const data = res.data;
        history.push({
          pathname: "/list",
          state: {
            data,
          },
        });
      })
      .catch((err) => {
        
        console.log(err);
        setReq(false);
        alert("Request Timed Out, Please Go Back To Home Page");
        history.push({
          pathname: "/",
        })

      });
  };

  const handleRadioButton = (value) => {
    setOpt(value);
  };
  return (
    <div className="container-q">
      <Sidebar />

      {display ? loader : <ParticleComponent />}

      <Navbar />
      <div className="main-q">
        <form
          className="contact-form"
          method="post"
          name="myForm"
          autocomplete="on"
        >
          <h1 class="title">Lets get your Course!</h1>
          <div className="opt">Do you want high optimization?</div>
          <div className="opt-check">
            <span className="check-radio">
              <input
                type="radio"
                id="i-radio"
                name="optimization"
                defaultChecked
                value="yes"
                onChange={() => handleRadioButton(true)}
              />
              Yes
            </span>
            <span className="check-radio">
              <input
                type="radio"
                id="i-radio"
                name="optimization"
                value="no"
                onChange={() => handleRadioButton(false)}
              />
              No
            </span>
          </div>

          <div className="outer">
            <div className="ips">
              {opt ? (
                <div>
                  <div class="signup-field">
                    <div className="text">
                      What do you want to learn today?
                      <span className="req">*</span>
                    </div>
                    <div>
                      <select
                        onChange={(e) => setSkill(e.target.value)}
                        className="input-field"
                      >
                        <option className="op">Select a topic</option>
                        {skills.map((option) => {
                          return (
                            <option
                              value={option}
                              key={option}
                              className="op"
                              id="option"
                            >
                              {option}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="signup-field">
                    <div className="text">
                      Please specify your level: <span className="req">*</span>
                    </div>

                    <div>
                      <select
                        onChange={(e) => setLevel(e.target.value)}
                        className="input-field"
                      >
                        <option className="op">Select a level</option>
                        {levels.map((option) => {
                          return (
                            <option value={option} key={option} className="op">
                              {option}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div class="signup-field">
                    <div className="">
                      <input
                        display={opt}
                        placeholder="Enter Any Previous Courses If Done "
                        className="input-field keyword"
                        onChange={(e) => setKeyword(e.target.value)}
                      ></input>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div class="signup-field">
                    <div className="text">
                      What do you want to learn today?{" "}
                      <span className="req">*</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="input-field"
                        onChange={(e) => setSkill(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="signup-field">
                    <div className="text">
                      Please specify your level: <span className="req">*</span>
                    </div>

                    <div>
                      <select
                        onChange={(e) => setLevel(e.target.value)}
                        className="input-field"
                      >
                        <option className="op">Select a level</option>
                        {levels.map((option) => {
                          return (
                            <option value={option} key={option} className="op">
                              {option}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div class="signup-button">
            <input
              type="submit"
              className="sub"
              value="SUBMIT"
              onClick={handleSubmit}
            />
          </div>
          <div className="required">
            <span className="req">*</span> required
          </div>
        </form>
      </div>
      <div className="name">
        Made with <AiFillHeart /> by DataGrad
      </div>
    </div>
  );
};

export default QuestionsForm;
