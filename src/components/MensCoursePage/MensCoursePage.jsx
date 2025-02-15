import React, { useState, useEffect } from "react";
import "./MensCoursePage.css";

import Syd from "../../assets/images/sydwarm.jpg"
import Emi from "../../assets/images/emiwarm.jpg"
import Chloe from "../../assets/images/cholewarm1.jpg"

import One from "../../assets/Mimages/1.jpg"
import Two from "../../assets/Mimages/2.jpg"
import Three from "../../assets/Mimages/3.jpg"
import Four from "../../assets/Mimages/4.jpg"
import Five from "../../assets/Mimages/5.jpg"
import Six from "../../assets/Mimages/6.jpg"

import Seven from "../../assets/Mimages/7.jpg"
import Eight from "../../assets/Mimages/8.jpg"
import Nine from "../../assets/Mimages/9.jpg"
import Ten from "../../assets/Mimages/10.jpg"



const MensCoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("WARM UP");

  const categories = ["WARM UP", "CHEST", "STRENGTH", "CARDIO", "WEIGHT LOSS", "FULL BODY"];

  const warmUpCards = [
    { id: 1, title: "5 Min Whole Body Stretch Routine ~ ATHLEAN-X", image: One, duration: "5m", link: "https://www.youtube.com/watch?v=AGj7wEn1jLo"},
    { id: 2, title: "Easy Warm Up Routine, 6 minute Warm Up ~ Get Fit With Rick", image: Two, duration: "6m", link: "https://www.youtube.com/watch?v=n4BP_B36wlI" },
    { id: 3, title: "5 Minute Full Body Dynamic Warm-Up Stretch ~ Juice & Toya", image: Three, duration: "5m", link: "https://www.youtube.com/watch?v=3qyWpJ34dWw"},
    { id: 4, title: "Do This Warm Up Before Every Workout ~ Oliver Sjostrom", image: Four, duration: "10m", link: "https://www.youtube.com/watch?v=9UYVecB2_08"},
    { id: 5, title: "5 MIN WARM UP FOR AT HOME WORKOUTS ~ TIFFxDAN", image: Five, duration: "5m", link: "https://www.youtube.com/watch?v=_6-k5-w1bZw"},
    { id: 6, title: "Do This Before Every Workout ~ NEXT Workout", image: Six, duration: "5m", link: "https://www.youtube.com/watch?v=ZO2ZwicxCEs"},
      ];

  const chestCards = [
    { id: 7, title: "INTENSE CHEST WORKOUT AT HOME ~ TIFF x DAN", image: Seven, duration: "12m", link: "https://www.youtube.com/watch?v=Jf5_PJCFs-g" },
    { id: 8, title: "Most Effective CHEST Workout at HOME ~ NEXT Workout", image: Eight, duration: "10m", link: "https://www.youtube.com/watch?v=qwx1VV9vV1A"},
    { id: 9, title: "9 Most Underrated Chest Exercises! ~ Tharun Kumar", image: Nine, duration: "10m", link: "https://www.youtube.com/watch?v=17WEFXKOljA"},
    { id: 10, title: "Chest. Shoulder & ABS Workout ~ Jae-ho", image: Ten, duration: "20m", link: "https://www.youtube.com/watch?v=Dk21IuMwpec"},
  ];

  const strengthCards = [
    { id: 11, title: "Slim Thighs & Legs Workout ~ Chloe Ting", image: Chloe, duration: "15m", link: "https://www.youtube.com/watch?v=EUruBzhv7Kk  " },
    { id: 12, title: "Plie Squat Challenge! ~ Cassey Ho", image: Chloe, duration: "8m", link: "https://www.youtube.com/watch?v=SNGsOVKwpCA" },
    { id: 13, title: "10 MIN LEG/BOOTY/THIGH WORKOUT ~ MadFit", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=FJA3R7n_594" },
    { id: 14, title: "SLIM LEGS IN 20 DAYS! ~ Emi", image: Chloe, duration: "10m", link: "https://www.youtube.com/watch?v=Jg61m0DwURs" },
  ];

  const cardioCards = [
    { id: 15, title: "Complete 20 Min Full Body Cardio Workout ~ THENX", image: Chloe, duration: "20m", link: "https://www.youtube.com/watch?v=79cx5vmf3Qg" },
    { id: 16, title: "Low Impact Cardio,Body Combat Walking Workout ~ Get Fit With Rick", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=u7c3CtrPKbc" },
    { id: 17, title: "20 Min Fat Burning HIIT Workout ~ Oliver Sjostrom", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=-hSma-BRzoo" },
    { id: 18, title: "Killer Fat-Burning Home Cardio ~ Jae-ho", image: Chloe, duration: "30m", link: "https://www.youtube.com/watch?v=ZfU8DzNxrNU" },
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