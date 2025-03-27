import React from "react";
import SendIcon from "../../assets/send.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">VasuX.ai</h1>

      <div className="input-container">
        <input type="text" placeholder="Shoot me a question" className="text-box" />
        <img src={SendIcon} className="send-icon" />
      </div>
    </div>
  );
}
