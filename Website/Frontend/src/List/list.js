import React from "react";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ParticleComponent from "../Particles/particles";
import { AiFillHeart } from "react-icons/ai";
import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/navbar";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const List = (props) => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  var courses = [];
  var links = [];
  var levels = [];
  var orgs = [];
  var ratings = [];
  var about = [];
  var gained = [];
  var course_1 = [];
  var course_2 = [];
  var course_3 = [];
  var course_1_links = [];
  var course_2_links = [];
  var course_3_links = [];

  for (var i = 0; i < 65; i++) {
    if (i >= 20 && i <= 24) {
      courses.push(items[i]);
    }

    if (i >= 25 && i <= 29) {
      links.push(items[i]);
    }

    if (i >= 30 && i <= 34) {
      levels.push(items[i]);
    }

    if (i >= 35 && i <= 39) {
      orgs.push(items[i]);
    }

    if (i >= 40 && i <= 44) {
      about.push(items[i]);
    }

    if (i >= 45 && i <= 49) {
      ratings.push(items[i]);
    }

    if (i >= 50 && i <= 54) {
      gained.push(items[i]);
    }

    if (i >= 55 && i <= 59) {
      course_1.push(items[i]);
    }

    if (i >= 5 && i <= 9) {
      course_2.push(items[i]);
    }

    if (i >= 0 && i <= 4) {
      course_3.push(items[i]);
    }
    if (i >= 10 && i <= 14) {
      course_1_links.push(items[i]);
    }

    if (i >= 60 && i <= 64) {
      course_2_links.push(items[i]);
    }

    if (i >= 15 && i <= 19) {
      course_3_links.push(items[i]);
    }
  }

  for (i = 0; i < about.length; i++) {
    if (!about[i] || !about[i].length) {
      continue;
    } else {
      if (about[i].length > 400) {
        about[i] = about[i].slice(0, 400) + "...";
      }
    }
  }
  var link_list = links.reduce(function (result1, field, index) {
    result1[courses[index]] = field;
    return result1;
  }, {});

  var difficulty_list = levels.reduce(function (result2, field, index) {
    result2[courses[index]] = field;
    return result2;
  }, {});

  var organization_list = orgs.reduce(function (result3, field, index) {
    result3[courses[index]] = field;
    return result3;
  }, {});

  var rating_list = ratings.reduce(function (result4, field, index) {
    result4[courses[index]] = field;
    return result4;
  }, {});

  var about_list = about.reduce(function (result5, field, index) {
    result5[courses[index]] = field;
    return result5;
  }, {});

  var course1_list = course_1.reduce(function (result7, field, index) {
    result7[courses[index]] = field;
    return result7;
  }, {});

  var course2_list = course_2.reduce(function (result8, field, index) {
    result8[courses[index]] = field;
    return result8;
  }, {});

  var course3_list = course_3.reduce(function (result9, field, index) {
    result9[courses[index]] = field;
    return result9;
  }, {});

  var course1_links_list = course_1_links.reduce(function (
    result10,
    field,
    index
  ) {
    result10[courses[index]] = field;
    return result10;
  },
  {});

  var course2_links_list = course_2_links.reduce(function (
    result11,
    field,
    index
  ) {
    result11[courses[index]] = field;
    return result11;
  },
  {});

  var course3_links_list = course_3_links.reduce(function (
    result12,
    field,
    index
  ) {
    result12[courses[index]] = field;
    return result12;
  },
  {});

  useEffect(() => {
    setItems(location.state.data);
  }, [location]);

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  //let refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const refs = [ref1, ref2, ref3, ref4, ref5];

  console.log(about);
  return (
    <div className="contain-list">
      <Sidebar />

      <ParticleComponent />

      <Navbar />
      <div>
        <div className="list-text">
          Here are the Top 5 courses we recommend
          </div>
          <div className="list-subtext">
          *We
          are still expanding our database, so if these courses do not match
          your expectation, we would really appreciate if you send us your query
          through the contact form and become a part of our family. Thank you!
        </div>
        <div className="main-list">
          {Object.keys(link_list).map((course, i) => (
            <Flippy
              className="flip"
              flipOnHover={false}
              flipOnClick={true} // default false
              // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={refs[i]} // to use toggle method like ref.curret.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
            >
              <FrontSide>
                <div className="card" style={{ minHeight: "500px" }}>
                  <a rel={"external"} target="_blank" href={link_list[course]}>
                    <div className="list-title">{course}</div>

                    <div className="list-diff">
                      Difficulty: {difficulty_list[course]}
                    </div>
                    <div className="list-org">
                      Course Offered By:{" "}
                      <span className="org-name">
                        {organization_list[course]}
                      </span>
                    </div>
                    <div className="list-about">{about_list[course]}</div>
                    <div className="list-rating">
                      Rating: {rating_list[course]}/5
                    </div>
                  </a>
                  <button
                    id="front-toggle"
                    onClick={() => {
                      refs[i].current.toggle();
                    }}
                  >
                    {" "}
                    Checkout More
                  </button>
                </div>
              </FrontSide>
              <BackSide>
                <div className="back" style={{ minHeight: "460px" }}>
                  <div className="back-heading">
                    Other Courses Offered By {organization_list[course]}
                  </div>

                  <div className="c-list">
                    <a
                      id="link"
                      href={course1_links_list[course]}
                      rel="noreferrer"
                      target="__blank"
                    >
                      {course1_list[course]}
                    </a>
                  </div>
                  <div className="c-list">
                    <a
                      id="link"
                      href={course2_links_list[course]}
                      rel="noreferrer"
                      target="__blank"
                    >
                      {course2_list[course]}
                    </a>
                  </div>
                  <div className="c-list">
                    <a
                      id="link"
                      href={course3_links_list[course]}
                      rel="noreferrer"
                      target="__blank"
                    >
                      {course3_list[course]}
                    </a>
                  </div>

                  <button
                    id="back-toggle"
                    onClick={() => {
                      refs[i].current.toggle();
                    }}
                  >
                    Back To Course
                  </button>
                </div>
              </BackSide>
            </Flippy>
          ))}
        </div>
      </div>
      <div className="name">
        Made with <AiFillHeart /> by DataGrad
      </div>
    </div>
  );
};

export default List;
