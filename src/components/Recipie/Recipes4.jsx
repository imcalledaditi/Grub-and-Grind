import React from 'react';
import './Recipes4.css';
import sandwich from '../../assets/vegan1.jpeg';
import waffles from '../../assets/vegan2.jpeg';
import mcmuffin from '../../assets/vegan3.jpeg';
import zoodles from '../../assets/vegan4.jpeg';

const recipeCards = [
  {
    id: 1,
    title: "Chickpea Burgers",
    image: sandwich,
    rating: 4.3,
    tags: ["HP", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/chickpea-burgers"
  },
  {
    id: 2,
    title: "BBQ Shredded Tofu Tacos",
    image: waffles,
    rating: 4.4,
    tags: ["HP", "LF", "GF", "Vn", "Vg", "DF"],
    link: "https://chloeting.com/recipes/bbq-shredded-tofu-tacos"
  },
  {
    id: 3,
    title: "Hidden Veggie Red Sauce",
    image: mcmuffin,
    rating: 4.5,
    tags: [],
    link: "https://chloeting.com/recipes/hidden-veggie-red-sauce"
  },
  {
    id: 4,
    title: "Sesame Orange Cauliflower",
    image: zoodles,
    rating: 4.6,
    tags: ["LC", "HP", "GF"],
    link: "https://chloeting.com/recipes/sesame-orange-cauliflower"
  },
];

function Recipes4() {
  return (
    <div className="recipes-section">
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>Easy Vegan Recipes</h2>
          <p>Enjoy a variety of simple, plant-based recipes that are free from dairy, meat, and eggs, making vegan eating both delicious and accessible!</p>
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

export default Recipes4;
