import React from 'react';
import './Recipes2.css';
import sandwich from '../../assets/break1.jpeg';
import waffles from '../../assets/break2.jpeg';
import mcmuffin from '../../assets/break3.jpeg';
import zoodles from '../../assets/break4.jpeg';

const recipeCards = [
  {
    id: 1,
    title: "Breakfast Berry Parfait",
    image: sandwich,
    rating: 4.3,
    tags: ["HP", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/breakfast-berry-parfait"
  },
  {
    id: 2,
    title: "Fancy Avocado Toasts",
    image: waffles,
    rating: 4.4,
    tags: ["HP", "LF", "GF", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/fancy-avocado-toasts"
  },
  {
    id: 3,
    title: "Shamrock Smoothie",
    image: mcmuffin,
    rating: 4.5,
    tags: [],
    link: "https://chloeting.com/recipes/shamrock-smoothie"
  },
  {
    id: 4,
    title: "Healthy Banana Almond Oatmeal",
    image: zoodles,
    rating: 4.6,
    tags: ["LC", "HP", "GF"],
    link: "https://chloeting.com/recipes/healthy-banana-almond-oatmeal"
  },
];

function Recipes2() {
  return (
    <div className="recipes-section">
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>Easy Breakfast Ideas</h2>
          <p>Kickstart your morning with these quick and effortless breakfast ideas, perfect for busy days and meal prep enthusiasts!</p>
          <button className="view-all">View All</button>
        </div>
        
        <div className="recipe-grid">
          {recipeCards.map((recipe) => (
            <div key={recipe.id} className="recipe-card clickable" style={{ cursor: 'pointer' }} onClick={() => window.open(recipe.link, '_blank', 'noopener noreferrer')}>
              <div className="recipe-image-container">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-rating">
                  <span className="star">★</span>
                  <span>{recipe.rating}</span>
                </div>
                <button className="add-button">+</button>
                <button className="favorite-button">♡</button>
              </div>
              <div className="recipe-content">
                <h3 className="recipe-title">{recipe.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes2;
