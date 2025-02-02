import React from 'react';
import './Recipes3.css';
import sandwich from '../../assets/drink1.jpeg';
import waffles from '../../assets/drink2.jpeg';
import mcmuffin from '../../assets/drink3.jpeg';
import zoodles from '../../assets/drink4.jpeg';

const recipeCards = [
  {
    id: 1,
    title: "Sugar-Free Lemonade",
    image: sandwich,
    rating: 4.3,
    tags: ["HP", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/sugar-free-lemonade"
  },
  {
    id: 2,
    title: "Matcha Latte with Mini Taro Balls",
    image: waffles,
    rating: 4.4,
    tags: ["HP", "LF", "GF", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/matcha-latte-with-mini-taro-balls"
  },
  {
    id: 3,
    title: "Milk Tea with Coffee Jelly",
    image: mcmuffin,
    rating: 4.5,
    tags: [],
    link: "https://chloeting.com/recipes/milk-tea-with-coffee-jelly"
  },
  {
    id: 4,
    title: "3-Ingredient Strawberry Boba",
    image: zoodles,
    rating: 4.6,
    tags: ["LC", "HP", "GF"],
    link: "https://chloeting.com/recipes/3-ingredient-strawberry-boba"
  },
];

function Recipes3() {
  return (
    <div className="recipes-section">
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>Healthy Drinks Recipes</h2>
          <p>Sip your way to wellness with refreshing and nourishing drink recipes, from energizing smoothies to indulgent homemade boba!</p>
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

export default Recipes3;
