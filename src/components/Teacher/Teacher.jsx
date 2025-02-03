import React, { useState } from 'react';
import './Teacher.css';
import Chloe from '../../assets/chloe.jpg';
import Cassie from '../../assets/cassieho.jpg';
import Maya from '../../assets/maya.jpg';
import zoodles from '../../assets/bud4.jpeg';
import John from '../../assets/bud1.jpeg';
import David from '../../assets/bud2.jpeg';

// Sample Data
const menCards = [
  { id: 5, title: "John Doe", image: John, link: "https://example.com/john" },
  { id: 6, title: "David Smith", image: David, link: "https://example.com/david" }
];

const womenCards = [
  { id: 1, title: "Chloe Ting", image: Chloe, link: "https://chloeting.com" },
  { id: 2, title: "Cassie Ho", image: Cassie, link: "https://blogilates.com" },
  { id: 3, title: "Maya Adam", image: Maya, link: "https://mayaadam.com" },
  { id: 4, title: "Lemon Garlic Chicken Zoodles", image: zoodles, link: "https://example.com/zoodles" }
];

const Teacher = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Define categories
  const categories = ['ALL', 'MEN', 'WOMEN'];

  // Filter Cards Based on Selected Category
  const displayRecipes =
    selectedCategory === 'ALL' ? [...menCards, ...womenCards] :
    selectedCategory === 'MEN' ? menCards :
    womenCards; // Default to womenCards if 'WOMEN' is selected

  return (
    <div className="page-container">
      <h1 className="page-title">Instructors</h1>
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
