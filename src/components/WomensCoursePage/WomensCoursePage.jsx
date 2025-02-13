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
import Blog from "../../assets/images/blogwarm.jpg"
import Chloe1 from "../../assets/images/cholewarm2.jpg"
import Blogcore from "../../assets/images/blogabs.jpg"
import Maddiecore from "../../assets/images/madabs.jpg"
import Chloecore from "../../assets/images/choleabs.jpg"

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
    { id: 4, title: "5 M Minute Up For At Home Workouts ~ MadFit", image: Maddie, duration: "5m", link: "https://www.youtube.com/watch?v=f3zOrYCwquE"},
    { id: 5, title: "10 Minute Full Body Warm Up ~ Cassey Ho", image: Blog, duration: "10m", link: "https://www.youtube.com/watch?v=T7Mk9KBuhAU"},
    { id: 6, title: "5 Min Warm Up Before A Workout ~ Chloe Ting", image: Chloe1, duration: "5m", link: "https://www.youtube.com/watch?v=-HEHDNr8FN8"},
  ];

  const coreCards = [
    { id: 7, title: "10 Min Pilates Ab Workout ~ Cassey Ho", image: Blogcore, duration: "10m", link: "https://www.youtube.com/watch?v=0K7NNWMhO1Q&list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt&index=2" },
    { id: 8, title: "10 Min Daily Ab Workout ~ MadFit", image: Maddiecore, duration: "10m", link: "https://www.youtube.com/watch?v=Dl8N_8UtWUU"},
    { id: 9, title: "10 Min Standing Abs Workout to get Ripped ABS ~ Chloe Ting", image: Chloecore, duration: "10m", link: "https://www.youtube.com/watch?v=V4sWpLJcQoU"},
  ];

  const legsCards = [
    { id: 10, title: "Slim Thighs & Legs Workout ~ Chloe Ting", image: Noel, duration: "15m", link: "https://www.youtube.com/watch?v=EUruBzhv7Kk  " },
    { id: 11, title: "Plie Squat Challenge! ~ Cassey Ho", image: Jeff, duration: "8m", link: "https://www.youtube.com/watch?v=SNGsOVKwpCA" },
    { id: 12, title: "10 MIN LEG/BOOTY/THIGH WORKOUT ~ MadFit", image: Jeff, duration: "10m", link: "https://www.youtube.com/watch?v=FJA3R7n_594" },
    { id: 13, title: "Jeff Nippard", image: Jeff, duration: "30m", link: "https://jeffnippard.com/pages/about" },
  ];

  const cardioCards = [
    { id: 14, title: "Dr. Mike Israetel", image: Dr, duration: "45m", link: "https://rpstrength.com/pages/team/michael-israetel" },
    { id: 15, title: "Athlean-X", image: X, duration: "35m", link: "https://athleanx.com/the-coach" },
    {id: 16, title: "Jeff Nippard", image: Jeff, duration: "30m", link: "https://jeffnippard.com/pages/about" },
    {id: 17, title: "Jeff Nippard", image: Jeff, duration: "30m", link: "https://jeffnippard.com/pages/about" },
    {id: 19, title: "Jeff Nippard", image: Jeff, duration: "30m", link: "https://jeffnippard.com/pages/about" },
  ];

  const weightLossCards = [
    
    { id: 20, title: "Jared Beckstrand", image: Jared, duration: "28m", link: "https://jaredbeckstrand.com/" },
  ];

  const categoryCards = {
    "WARM UP": warmUpCards,
    "CORE": coreCards,
    "LEGS": legsCards,
    "CARDIO": cardioCards,
    "WEIGHT LOSS": weightLossCards,
    "ARMS": coreCards, // Only core cards here, no need to include warmUpCards
    "HIPS": [...legsCards, ...cardioCards], // Legs and cardio for hips
    "FULL BODY": [...warmUpCards, ...coreCards, ...legsCards, ...cardioCards, ...weightLossCards], // Full body includes everything
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