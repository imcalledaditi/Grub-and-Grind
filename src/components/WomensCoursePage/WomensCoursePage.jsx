import React, { useState, useEffect } from "react";
import "./WomensCoursePage.css";
import Chloe from "../../assets/chloe.jpg";
import Cassie from "../../assets/cassieho.jpg";
import Emi from "../../assets/emi.jpeg";
import Maddie from "../../assets/maddie.jpg";
import Sydney from "../../assets/syd.jpg";
import Noel from "../../assets/noel.jpg";
import Jeff from "../../assets/jeff.jpg";
import Dr from "../../assets/dr.jpg";
import X from "../../assets/x.jpg";
import Jared from "../../assets/jared.png";

const WomensCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("WARM UP");

  const categories = ["WARM UP", "CORE", "LEGS", "CARDIO", "WEIGHT LOSS", "ARMS", "HIPS", "FULL BODY"];

  const warmUpCards = [
    { id: 1, title: "Chloe Ting", image: Chloe, link: "https://legacy-site.chloeting.com/about/" },
    { id: 2, title: "Cassie Ho", image: Cassie, link: "https://www.blogilates.com/about-me/" },
  ];

  const coreCards = [
    { id: 3, title: "Emi Wong", image: Emi, link: "https://www.emiwong.life/about-me" },
    { id: 4, title: "Maddie Lymburner", image: Maddie, link: "https://maddielymburner.co/" },
  ];

  const legsCards = [
    { id: 5, title: "Noel Deyzel", image: Noel, link: "https://noeldeyzel.com/" },
    { id: 6, title: "Jeff Nippard", image: Jeff, link: "https://jeffnippard.com/pages/about" },
  ];

  const cardioCards = [
    { id: 7, title: "Dr. Mike Israetel", image: Dr, link: "https://rpstrength.com/pages/team/michael-israetel" },
    { id: 8, title: "Athlean-X", image: X, link: "https://athleanx.com/the-coach" },
  ];

  const weightLossCards = [
    { id: 9, title: "Sydney Cummings", image: Sydney, link: "https://royalchange.fit/" },
    { id: 10, title: "Jared Beckstrand", image: Jared, link: "https://jaredbeckstrand.com/" },
  ];

  const categoryCards = {
    "WARM UP": warmUpCards,
    "CORE": coreCards,
    "LEGS": legsCards,
    "CARDIO": cardioCards,
    "WEIGHT LOSS": weightLossCards,
    "ARMS": [...warmUpCards, ...coreCards],
    "HIPS": [...legsCards, ...cardioCards],
    "FULL BODY": [...warmUpCards, ...coreCards, ...legsCards, ...cardioCards, ...weightLossCards],
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Women's Workout</h1>
      <div className="content-wrapper">
        <div className="sidebar">
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-item ${category === selectedCategory ? "selected" : ""}`}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <span className="category-name">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="main-content">
          <div className="recipe-grid">
            {categoryCards[selectedCategory].map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card clickable"
                onClick={() => window.open(recipe.link, "_blank", "noopener noreferrer")}
                style={{ cursor: "pointer" }}
              >
                <div className="recipe-image-container">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensCoursePage;
