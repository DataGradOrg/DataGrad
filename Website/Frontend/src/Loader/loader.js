import React from "react";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";
import "./loader.scss";
import ParticleComponent from "../Particles/particles";

const messages = [
  "Loading your preferences...",
  "Building recommendation suite...",
  "Curating your personalized courses...",
];

const Loader = (props) => {
  const { messages } = props;

  const [messageIndex, setMessageIndex] = useState(0);
  const [req,setReq]=useState(false);
  

  useEffect(() => {
    let timeout;
    if (messageIndex < messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 2200);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);

  return <div>{messages[messageIndex]}</div>;
};

const LoadMain = () => {
  return (
    <div className="fp-container">
      <ParticleComponent />
      <div className="msg-container">
      <span>
        <Loader messages={messages} />
      </span>
      </div>
      <ReactLoading type={"bars"} color="#FFFFFF" />
    </div>
  );
};

export default LoadMain;
