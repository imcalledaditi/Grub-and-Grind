import React, { useState, useRef, useEffect } from "react";
import styles from "./LifestylePillars.module.css";
import image1 from '../../assets/kid.jpg';
import image2 from '../../assets/healthy.jpg';
import image3 from '../../assets/prego.jpg';
import image4 from '../../assets/tranier.jpeg';
import image5 from '../../assets/sebum.jpg';
import image6 from '../../assets/woman.jpg';

const cards = [
  {
    id: "nutrition",
    title: "Kids' Recipes",
    description: "A whole food, plant-predominant diet can help prevent and treat chronic illnesses. Teaching kids nutritious recipes that focus on fruits, vegetables, and whole grains fosters healthy eating habits early on.",
    image: image1,
    stat: "47 videos",
    statunit: "by Maya Adam",
    link: "https://www.youtube.com/playlist?list=PLB0AYRZmsMalvNbfs1qMWUeB2YF3CcOgI"
  },
  {
    id: "physical",
    title: "Food & Health",
    description: "Regular physical activity is key to maintaining a healthy weight and improving mental well-being. Aim for at least 32 minutes of exercise daily to boost cardiovascular health.",
    image: image2,
    stat: "17 videos",
    statunit: "by Maya Adam",
    link: "https://www.youtube.com/playlist?list=PLB0AYRZmsMake5dK42lB2hkSlRgpDVsWl"
  },
  {
    id: "sleep",
    title: "Pregnancy Nutrition",
    description: "Quality sleep is essential during pregnancy, with around 8 hours recommended for recovery and mental clarity. Proper nutrition also supports better sleep quality.",
    image: image3,
    stat: "28 videos",
    statunit: "by Dr Supriya Puranik",
    link: "https://www.youtube.com/playlist?list=PLG98j67a-FKkYfNmnnhO_0hfX21OgO9lW"
  },
  {
    id: "stress",
    title: "Fitness Expertise",
    description: "Managing stress is vital for health. Regular exercise reduces stress and improves well-being, aiming for a heart rate of about 60 bpm during workouts.",
    image: image4,
    stat: "6 videos",
    statunit: "by AXIS Flight School",
    link: "https://www.youtube.com/playlist?list=PLFfhO7WNmG6o3pI-0wby-8d25eNmowfpT"
  },
  {
    id: "social",
    title: "Exercise Hacks",
    description: "Strong social connections reduce stress and promote longevity. Maintaining relationships with at least three supportive friends can enhance motivation for healthy activities.",
    image: image5,
    stat: "41 videos",
    statunit: "by FrankATracy",
    link: "https://www.youtube.com/playlist?list=PLTgHf_B4EipZyLCydl0jkgfj9otk7N84F"
  },
  {
    id: "substance",
    title: "Weight Loss Plan",
    description: "Avoiding substance abuse is crucial for long-term health. A commitment to sobriety supports weight management and overall quality of life.",
    image: image6,
    stat: "5 videos",
    statunit: "by Chloe Ting",
    link: "https://www.youtube.com/playlist?list=PLAFs3kxY4h19s58CCweEFjPflDTrMbKmY"
  },
];

const LifestylePillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardContainerRef = useRef(null);
  const isMobile = window.innerWidth <= 768;

  const handleSwipe = (event) => {
    const container = cardContainerRef.current;
    if (container) {
      const startX = event.touches[0].pageX;
      container.ontouchend = (e) => {
        const endX = e.changedTouches[0].pageX;
        if (endX < startX - 50) {
          handleArrowClick("right");
        } else if (endX > startX + 50) {
          handleArrowClick("left");
        }
      };
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index, link) => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = cardContainerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / cards.length;
      container.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div className={`${styles.container} lifestyle-pillars`} id="lifestyle">
      <div className={styles["title-container"]}>
        <div className={styles.lam}>Fitness & Nutrition Courses</div>
      </div>
      
      <div className={styles.lifestylePillars}>
        {!isMobile && (
          <div className={styles.tabs}>
            {cards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => handleTabClick(index)}
                className={`${styles.tab} ${
                  index === activeIndex ? styles.activeTab : ""
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>
        )}

        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            onClick={() => handleArrowClick("left")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L19 12M5 12L11 18M5 12L11 6" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.arrow}
            onClick={() => handleArrowClick("right")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12L5 12M19 12L13 18M19 12L13 6" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div
          className={styles.cardContainer}
          ref={cardContainerRef}
          onTouchStart={handleSwipe}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.card} ${
                index === activeIndex ? styles.focusedCard : ""
              } ${card.link ? styles.clickableCard : ""}`}
              onClick={() => handleCardClick(index, card.link)}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className={styles.cardImage}
              />
              <div className={styles.statContainer}>
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{card.stat}</span>
                  <span className={styles.statUnit}>{card.statunit}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.maintext}>{card.title}</h3>
                <p className={styles.subtext}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestylePillars;