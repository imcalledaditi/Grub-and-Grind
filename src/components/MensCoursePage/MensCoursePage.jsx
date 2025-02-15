import React, { useState, useEffect } from "react";
import "./MensCoursePage.css";

import Syd from "../../assets/images/sydwarm.jpg"
import Emi from "../../assets/images/emiwarm.jpg"
import Chloe from "../../assets/images/cholewarm1.jpg"



const MensCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("WARM UP");

  const categories = ["WARM UP", "CHEST", "STRENGTH", "CARDIO", "WEIGHT LOSS", "FULL BODY"];

  const warmUpCards = [
    { id: 1, title: "5 Min Whole Body Stretch Routine (PRE-WORKOUT STRETCH) ~ ATHLEAN-X", image: Syd, duration: "5m", link: "https://www.youtube.com/watch?v=AGj7wEn1jLo"},
    { id: 2, title: "10 Minute Warm Up Routine Before Any Workut ~ Emi", image: Emi, duration: "10m", link: "https://www.youtube.com/watch?v=p7EU5yGAcJ4" },
    { id: 3, title: "Quick Warm Up Routine ~ Chloe Ting", image: Chloe, duration: "6m", link: "https://www.youtube.com/watch?v=-p0PA9Zt8zk"},
    { id: 4, title: "5 M Minute Up For At Home Workouts ~ MadFit", image: Chloe, duration: "5m", link: "https://www.youtube.com/watch?v=f3zOrYCwquE"},
    { id: 5, title: "10 Minute Full Body Warm Up ~ Cassey Ho", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=T7Mk9KBuhAU"},
    { id: 6, title: "10 Minute Full Body Warm Up ~ Cassey Ho", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=T7Mk9KBuhAU"},
      ];

  const chestCards = [
    { id: 7, title: "10 Min Pilates Ab Workout ~ Cassey Ho", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=0K7NNWMhO1Q&list=PLSCcAGyv98icX4pV3k5uIYtzjaVw12myt&index=2" },
    { id: 8, title: "10 Min Daily Ab Workout ~ MadFit", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=Dl8N_8UtWUU"},
    { id: 9, title: "10 Min Standing Abs Workout to get Ripped ABS ~ Chloe Ting", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=V4sWpLJcQoU"},
    { id: 10, title: "5 Min Warm Up Before A Workout ~ Chloe Ting", image: Chloe, duration: "5m", link: "https://www.youtube.com/watch?v=-HEHDNr8FN8"},
  ];

  const strengthCards = [
    { id: 11, title: "Slim Thighs & Legs Workout ~ Chloe Ting", image: Chloe, duration: "15m", link: "https://www.youtube.com/watch?v=EUruBzhv7Kk  " },
    { id: 12, title: "Plie Squat Challenge! ~ Cassey Ho", image: Chloe, duration: "8m", link: "https://www.youtube.com/watch?v=SNGsOVKwpCA" },
    { id: 13, title: "10 MIN LEG/BOOTY/THIGH WORKOUT ~ MadFit", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=FJA3R7n_594" },
    { id: 14, title: "SLIM LEGS IN 20 DAYS! ~ Emi", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=Jg61m0DwURs" },
  ];

  const cardioCards = [
    { id: 15, title: "10 Minute Fat Burning Cardio Workout ~ Cassey Ho", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=Wg6-xYyB0cg" },
    { id: 16, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
    { id: 17, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
    { id: 18, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
  ];

  const weightLossCards = [
    
    { id: 19, title: "Do This Everyday To Lose Weight ~ Chloe Ting", image: Chloe, duration: "28m", link: "https://www.youtube.com/watch?v=2MoGxae-zyo" },
    { id: 20, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
    { id: 21, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
    { id: 22, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
  ];

    const fullbodyCards = [
    
    { id: 23, title: "30 min Full Body Fat Burn HIIT (NO JUMPING) ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=W4eKVKwf3rQ" },
    { id: 24, title: "Best Full Body Workout to Lose Fat 💪🏽20 mins ~ Chloe Ting", image: Chloe, duration: "20m", link: "hhttps://www.youtube.com/watch?v=CGmr02bfHUo" },
    { id: 25, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
    { id: 26, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
  ];

  const categoryCards = {
    "WARM UP": warmUpCards,
    "CHEST": chestCards,
    "STRENGTH": strengthCards,
    "CARDIO": cardioCards,
    "WEIGHT LOSS": weightLossCards,
    "FULL BODY": fullbodyCards,
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Men's Workout</h1>
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

export default MensCoursePage;