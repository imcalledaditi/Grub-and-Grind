import React, { useState, useEffect } from "react";
import "./WomensCoursePage.css";
import Noel from "../../assets/noel.jpg";
import Jeff from "../../assets/jeff.jpg";
import Dr from "../../assets/dr.jpg";
import X from "../../assets/x.jpg";
import Jared from "../../assets/jared.png";
import Syd from "../../assets/images/sydwarm.jpg"
import Emi from "../../assets/images/emiwarm.jpg"
import Chloe from "../../assets/images/cholewarm1.jpg"
import Maddie from "../../assets/images/madwarm.jpg"

const WomensCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("WARM UP");

  const categories = ["WARM UP", "CORE", "LEGS", "CARDIO", "WEIGHT LOSS", "ARMS", "HIPS", "FULL BODY"];

  const warmUpCards = [
    { id: 1, title: "10 Minute Full Body Stretch ~ Sydney Cummings", image: Syd, duration: "10m", link: "https://www.youtube.com/watch?v=G1DM86lyNUc"},
    { id: 2, title: "10 Minute Warm Up Routine Before Any Workut ~ Emi", image: Emi, duration: "10m", link: "https://www.youtube.com/watch?v=p7EU5yGAcJ4" },
    { id: 3, title: "Quick Warm Up Routine ~ Chloe Ting", image: Chloe, duration: "6m", link: "https://www.youtube.com/watch?v=-p0PA9Zt8zk"},
    { id: 4, title: "5 M Minute Up For At Home Workouts", image: Maddie, duration: "5m", link: "https://www.youtube.com/watch?v=f3zOrYCwquE"},
    { id: 5, title: "10 Minute Full Body Warm Up", image: Chloe, duration: "10m", link: "https://legacy-site.chloeting.com/about/"},
    { id: 6, title: "5 Min Warm Up Before A Workout", image: Chloe, duration: "5m", link: "https://legacy-site.chloeting.com/about/"},
  ];

  const coreCards = [
    { id: 7, title: "Emi Wong", image: Emi, duration: "20m", link: "https://www.emiwong.life/about-me" },
    { id: 8, title: "Maddie Lymburner", image: Maddie, duration: "15m", link: "https://maddielymburner.co/" },
  ];

  const legsCards = [
    { id: 5, title: "Noel Deyzel", image: Noel, duration: "25m", link: "https://noeldeyzel.com/" },
    { id: 6, title: "Jeff Nippard", image: Jeff, duration: "30m", link: "https://jeffnippard.com/pages/about" },
  ];

  const cardioCards = [
    { id: 7, title: "Dr. Mike Israetel", image: Dr, duration: "45m", link: "https://rpstrength.com/pages/team/michael-israetel" },
    { id: 8, title: "Athlean-X", image: X, duration: "35m", link: "https://athleanx.com/the-coach" },
  ];

  const weightLossCards = [
    
    { id: 10, title: "Jared Beckstrand", image: Jared, duration: "28m", link: "https://jaredbeckstrand.com/" },
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
                className="recipe-card"
                onClick={() => window.open(recipe.link, "_blank", "noopener noreferrer")}
              >
                <div 
                  className="recipe-image-container"
                  data-duration={recipe.duration || "14m"}
                >
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