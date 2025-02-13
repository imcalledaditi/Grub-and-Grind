import React, { useState, useEffect } from "react";
import "./MensCoursePage.css";

import Syd from "../../assets/images/sydwarm.jpg"
import Emi from "../../assets/images/emiwarm.jpg"
import Chloe from "../../assets/images/cholewarm1.jpg"
import Maddie from "../../assets/images/madwarm.jpg"
import Blog from "../../assets/images/blogwarm.jpg"
import Chloe1 from "../../assets/images/cholewarm2.jpg"
import Blogcore from "../../assets/images/blogabs.jpg"
import Maddiecore from "../../assets/images/madabs.jpg"
import Chloecore from "../../assets/images/choleabs.jpg"
import Chloethai from "../../assets/images/chloethai.jpg"
import Blogthai from "../../assets/images/blogthai.jpg"
import Maddithai from "../../assets/images/madthai.jpg"
import Emithai from "../../assets/images/emithai.jpg"
import Blogcardio from "../../assets/images/cardioblog.jpg"
import Emicardio from "../../assets/images/cardioemi.jpg"
import Chloeweight from "../../assets/images/chloeweight.jpg"
import Hailarm from "../../assets/images/armhail.jpg"
import Chloefull from "../../assets/images/chloefull.jpg"
import Emifull from "../../assets/images/emifull.jpg"
import Chloehip from "../../assets/images/chloehip.jpg"


const MensCoursePage = () => {
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
    { id: 10, title: "Slim Thighs & Legs Workout ~ Chloe Ting", image: Chloethai, duration: "15m", link: "https://www.youtube.com/watch?v=EUruBzhv7Kk  " },
    { id: 11, title: "Plie Squat Challenge! ~ Cassey Ho", image: Blogthai, duration: "8m", link: "https://www.youtube.com/watch?v=SNGsOVKwpCA" },
    { id: 12, title: "10 MIN LEG/BOOTY/THIGH WORKOUT ~ MadFit", image: Maddithai, duration: "10m", link: "https://www.youtube.com/watch?v=FJA3R7n_594" },
    { id: 13, title: "SLIM LEGS IN 20 DAYS! ~ Emi", image: Emithai, duration: "10m", link: "https://www.youtube.com/watch?v=Jg61m0DwURs" },
  ];

  const cardioCards = [
    { id: 14, title: "10 Minute Fat Burning Cardio Workout ~ Cassey Ho", image: Blogcardio, duration: "10m", link: "https://www.youtube.com/watch?v=Wg6-xYyB0cg" },
    { id: 15, title: "30 MIN WALKING CARDIO WORKOUT ~ Emi", image: Emicardio, duration: "30m", link: "https://www.youtube.com/watch?v=ow3hpYJqYEI" },
  
  ];

  const weightLossCards = [
    
    { id: 16, title: "Do This Everyday To Lose Weight ~ Chloe Ting", image: Chloeweight, duration: "28m", link: "https://www.youtube.com/watch?v=2MoGxae-zyo" },
  ];

  const armsCards = [
    
    { id: 17, title: "10min Slim Arm Workout ~ Hailey C.", image: Hailarm, duration: "10m", link: "https://www.youtube.com/watch?v=XYp7GQicd0c" },
  ];

  const hipsCards = [
    
    { id: 18, title: "At Home Hourglass Challenge ~ Chloe Ting", image: Chloehip, duration: "10m", link: "https://www.youtube.com/watch?v=XYp7GQicd0c" },
  ];

  const fullbodyCards = [
    
    { id: 19, title: "30 min Full Body Fat Burn HIIT (NO JUMPING) ~ Emi", image: Emifull, duration: "30m", link: "https://www.youtube.com/watch?v=W4eKVKwf3rQ" },
    { id: 20, title: "Best Full Body Workout to Lose Fat 💪🏽20 mins ~ Chloe Ting", image: Chloefull, duration: "20m", link: "hhttps://www.youtube.com/watch?v=CGmr02bfHUo" },
  ];

  const categoryCards = {
    "WARM UP": warmUpCards,
    "CORE": coreCards,
    "LEGS": legsCards,
    "CARDIO": cardioCards,
    "WEIGHT LOSS": weightLossCards,
    "ARMS": armsCards, // Only core cards here, no need to include warmUpCards
    "HIPS": hipsCards,
    "FULL BODY": fullbodyCards,
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

export default MensCoursePage;