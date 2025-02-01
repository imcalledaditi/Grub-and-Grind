import React, { useState, useRef, useEffect } from "react";
import styles from "./LifestylePillars.module.css";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';

const cards = [
  {
    id: "nutrition",
    title: "Kids' Recipes",
    description: "Evidence supports the use of a whole food, plant-predominant diet to prevent and treat chronic illness.",
    image: image1,
    stat: "121/80",
    statunit: "mmHg",
  },
  {
    id: "physical",
    title: "Food & Health",
    description: "Regular physical activity is key to managing weight and improving mental health.",
    image: image2,
    stat: "32",
    statunit: "minutes",
  },
  {
    id: "sleep",
    title: "Pregnancy Nutrition",
    description: "Quality sleep is essential for recovery, mental clarity, and overall health.",
    image: image3,
    stat: "8",
    statunit: "hours",
  },
  {
    id: "stress",
    title: "Fitness Expertise",
    description: "Managing stress improves mental and physical well-being.",
    image: image4,
    stat: "60",
    statunit: "bpm",
  },
  {
    id: "social",
    title: "Exercise Hacks",
    description: "Strong social connections reduce stress and promote longevity.",
    image: image5,
    stat: "3+",
    statunit: "friends",
  },
  {
    id: "substance",
    title: "Weight Loss Plan",
    description: "Avoiding substance abuse is critical for long-term health.",
    image: image6,
    stat: "0",
    statunit: "drinks",
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
        if (endX < startX - 50 && activeIndex < cards.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else if (endX > startX + 50 && activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
        }
      };
    }
  };

  const scrollToCard = (index) => {
    const container = cardContainerRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / cards.length;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToCard(activeIndex);
  }, [activeIndex]);

  const handleArrowClick = (direction) => {
    const newIndex = direction === "left"
      ? Math.max(0, activeIndex - 1)
      : Math.min(cards.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hiw}>HOW IT WORKS</div>
      <div className={styles["title-container"]}>
        <div className={styles.lam}>Lifestyle as medicine:</div>
        <div className={styles.tsp}>The six pillars</div>
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
            disabled={activeIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12L19 12M5 12L11 18M5 12L11 6" stroke="#747474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={styles.arrow}
            onClick={() => handleArrowClick("right")}
            disabled={activeIndex === cards.length - 1}
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
              }`}
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