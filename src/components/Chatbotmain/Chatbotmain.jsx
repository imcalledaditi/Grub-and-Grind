import React, { useState } from 'react';
import axios from 'axios';
import "./Chatbotmain.css";

const Chatbotmain = ({ userProfile }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (message) => {
    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);
    setInput("");

    if (!message.toLowerCase().includes("fitness") && !message.toLowerCase().includes("nutrition")) {
      setMessages([...newMessages, { sender: "bot", text: "poda pati" }]);
      return;
    }

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
        {
          prompt: `User Profile: Height: ${userProfile.height}, Weight: ${userProfile.weight}, BMI: ${userProfile.bmi}. \nUser's Question: ${message}`,
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
          },
        }
      );

      const botMessage = response.data.choices[0].text.trim();
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't respond." }]);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about fitness or nutrition..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbotmain;
