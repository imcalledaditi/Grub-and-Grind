
import React from "react";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="landing-container">
      <header className="header">
        {/* Removed logo and menu button */}
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="title">
            Grub&Grind <span className="subtitle1">chatbot</span>
          </h1>
          <p className="description">
          The Grub & Grind Chatbot is your personal fitness and nutrition assistant, designed to help you achieve a healthier lifestyle with ease. Whether you're looking for meal plans, workout routines, or expert fitness tips, this chatbot provides instant, personalized recommendations.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        <div className="illustration">
          <ChatInterface />
          <HexGrid />
        </div>
      </main>
    </div>
  );
};

const ChatInterface = () => {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="chat-container">
          <ChatBubble type="bot" />
          <ChatBubble type="user" />
          <ChatBubble type="bot" />
        </div>
        <RobotIllustration />
      </div>
    </div>
  );
};

const ChatBubble = ({ type }) => {
  return (
    <div className={`chat-bubble ${type}`}>
      <div className="chat-icon">
        {type === "bot" ? (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="bot-icon">
            <circle cx="12" cy="12" r="10" fill="#00cc66" />
            <circle cx="8" cy="10" r="2" fill="#111111" />
            <circle cx="16" cy="10" r="2" fill="#111111" />
            <path d="M8 16C8 16 10 18 12 18C14 18 16 16 16 16" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          "👤"
        )}
      </div>
      <div className="chat-text"></div>
    </div>
  );
};

const RobotIllustration = () => {
  return (
    <div className="robot">
      <div className="robot-head">
        <div className="robot-eyes">
          <div className="robot-eye left"></div>
          <div className="robot-eye right"></div>
        </div>
        <div className="robot-mouth"></div>
        <div className="robot-antenna"></div>
      </div>
      <div className="robot-body">
        <div className="robot-badge"></div>
      </div>
      <div className="robot-arms">
        <div className="robot-arm left"></div>
        <div className="robot-arm right"></div>
      </div>
      <div className="robot-legs">
        <div className="robot-leg left"></div>
        <div className="robot-leg right"></div>
      </div>
    </div>
  );
};

const HexGrid = () => {
  return (
    <div className="hex-grid">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="hex"></div>
        ))}
    </div>
  );
};

export default Chatbot;