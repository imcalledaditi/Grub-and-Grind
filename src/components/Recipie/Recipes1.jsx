import React from 'react';
import './Recipes1.css';
import sandwich from '../../assets/bud1.jpeg';
import waffles from '../../assets/bud2.jpeg';
import mcmuffin from '../../assets/bud3.jpeg';
import zoodles from '../../assets/bud4.jpeg';

const recipeCards = [
  {
    id: 1,
    title: "Vegan Curried Egg Sandwich",
    image: sandwich,
    rating: 4.3,
    tags: ["HP", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/vegan-curried-egg-sandwich"
  },
  {
    id: 2,
    title: "Falafel Waffles",
    image: waffles,
    rating: 4.4,
    tags: ["HP", "LF", "GF", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/falafel-waffles"
  },
  {
    id: 3,
    title: "Healthy Sausage Egg McMuffin",
    image: mcmuffin,
    rating: 4.5,
    tags: [],
    link: "https://chloeting.com/recipes/healthy-sausage-egg-mcmuffin"
  },
  {
    id: 4,
    title: "Lemon Garlic Chicken Zoodles",
    image: zoodles,
    rating: 4.6,
    tags: ["LC", "HP", "GF"],
    link: "https://chloeting.com/recipes/lemon-garlic-chicken-zoodles"
  },
];

function Recipes1() {
  return (
    <div className="recipes-section">
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>Budget Meals</h2>
          <p>Explore wallet-friendly recipes that transform everyday pantry staples into nutritious, affordable meals without compromising on flavor!</p>
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

export default Recipes1;
