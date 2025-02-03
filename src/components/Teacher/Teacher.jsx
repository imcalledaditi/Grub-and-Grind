import React, { useState, useEffect } from "react"; // Import useEffect here
import "./Teacher.css";
import Chloe from "../../assets/chloe.jpg";
import Cassie from "../../assets/cassieho.jpg";
import Emi from "../../assets/emi.jpeg";
import Maddie from "../../assets/maddie.jpg";
import Sydney from "../../assets/syd.jpg";
import Noel from "../../assets/noel.jpg";
import Jeff from "../../assets/jeff.jpg";
import Dr from "../../assets/dr.jpg";
import X from "../../assets/x.jpg";

const Teacher = () => {
  // ✅ Ensure page opens at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "MEN", "WOMEN"];

  const menCards = [
    { id: 5, title: "Noel Deyzel", image: Noel, link: "https://example.com/john" },
    { id: 6, title: "Jeff Nippard", image: Jeff, link: "https://example.com/david" },
    { id: 7, title: "Dr. Mike Israetel", image: Dr, link: "https://example.com/john" },
    { id: 8, title: "Athlean-X", image: X, link: "https://example.com/david" }
  ];

  const womenCards = [
    { id: 1, title: "Chloe Ting", image: Chloe, link: "https://chloeting.com" },
    { id: 2, title: "Cassie Ho", image: Cassie, link: "https://blogilates.com" },
    { id: 3, title: "Emi Wong", image: Emi, link: "https://mayaadam.com" },
    { id: 4, title: "Maddie Lymburner", image: Maddie, link: "https://example.com/zoodles" },
    { id: 9, title: "Sydney Cummings", image: Sydney, link: "https://example.com/zoodles" }
  ];

  // Sort alphabetically when ALL is selected
  const displayRecipes =
    selectedCategory === "ALL"
      ? [...menCards, ...womenCards].sort((a, b) => a.title.localeCompare(b.title))
      : selectedCategory === "MEN"
      ? menCards
      : womenCards;

  return (
    <div className="page-container">
      <h1 className="page-title">Instructors</h1>
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

        {/* Main Content */}
        <div className="main-content">
          <div className="recipe-grid">
            {displayRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card clickable"
                onClick={() => window.open(recipe.link, "_blank", "noopener noreferrer")}
                style={{ cursor: "pointer" }}
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
