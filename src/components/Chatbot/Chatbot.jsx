"use client";

import { useEffect, useRef } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const canvasRef = useRef(null);

  // Create realistic starfield effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create stars
    const stars = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 1000);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: 0.05 + Math.random() * 0.1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars + twinkle effect
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        star.opacity += star.speed;
        if (star.opacity > 1) {
          star.opacity = 1;
          star.speed = -star.speed;
        } else if (star.opacity < 0.1) {
          star.opacity = 0.1;
          star.speed = Math.abs(star.speed);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="landing-container">
      {/* Starfield Canvas */}
      <canvas ref={canvasRef} className="starfield-canvas"></canvas>

      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="title">
            CHATBOT <span className="subtitle">technology</span>
          </h1>
          <p className="description">
            Experience the next generation of AI-powered fitness assistance. 
            Our chatbot provides personalized workout plans, real-time feedback, 
            and motivation to help you achieve your fitness goals.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        <div className="illustration">
          <div className="phone">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              {/* Aura animation */}
                <div className="phone-aura"></div>
              { 
                <img src="\src\assets\angrygif.gif" alt="Demo GIF" className="gif-in-phone" /> 
              }
            </div>
            <div className="phone-reflections"></div>
            <div className="phone-shadow"></div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="floating-particles">
        {Array(15)
          .fill(0)
          .map((_, i) => (
            <div
              key={`particle-${i}`}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
      </div>
    </div>
  );
}
