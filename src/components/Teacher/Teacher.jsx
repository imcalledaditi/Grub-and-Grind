import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Teacher.css'; // Keep your existing styles for animations and layout
import sandwich from '../../assets/bud1.jpeg'; // Sample images for use in cards
import waffles from '../../assets/bud2.jpeg';
import mcmuffin from '../../assets/bud3.jpeg';
import zoodles from '../../assets/bud4.jpeg';

// Sample recipe data
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

const Teacher = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    'ALL',
    'POP PILATES BEACH SERIES',
    'SERIES',
    'POP CARDIO',
    'NUTRITION INFOGRAPHICS',
    'LUNCH',
    'BREAKFAST',
    'DINNER',
    'SNACKS & SIDES',
    'DESSERTS'
  ];

  // Filter recipeCards based on selected category (currently no filter logic)
  const displayRecipes = recipeCards; // Adjust filtering logic as necessary

  return (
    <div className="page-container">
      <h1 className="page-title">Recipes</h1>
      <div className="content-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-item ${category === selectedCategory ? 'selected' : ''}`}
              >
                <div className="radio-button">
                  <div className="radio-inner"></div>
                </div>
                <span className="category-name">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="recipe-grid">
            {displayRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card clickable"
                onClick={() => window.open(recipe.link, '_blank', 'noopener noreferrer')}
                style={{ cursor: 'pointer' }}
              >
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
    </div>
  );
};

export default Teacher;