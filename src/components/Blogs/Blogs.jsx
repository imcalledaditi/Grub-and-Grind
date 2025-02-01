import React from 'react';
import './Blogs.css'; // Change back to regular CSS import

function Blogs() {
  const blogPosts = [
    {
      day: 18,
      month: "Mar",
      author: "Rachael Hartley",
      likes: "57.8K",
      shares: "5.8K",
      title: "The Joy of Eating Blog by Rachael Hartley",
      description: "Rachael Hartley, a registered dietitian, offers creative recipes and intuitive eating guidance, promoting a balanced and joyful relationship with food."
    },
    {
      day: 10,
      month: "Apr",
      author: "Dr Anitha Selvam",
      likes: "94.5K",
      shares: "38K",
      title: "Healthy Habits for a Stronger You",
      description: "Creating healthy habits starts with small changes. Explore tips on nutrition, mindful eating, and how to build habits that stick for long-term health."
    },
    {
      day: 4,
      month: "Dec",
      author: "Dr. Sanjay Shinde",
      likes: "73.2K",
      shares: "43.2K",
      title: "Plant-Based Eating for Beginners",
      description: "Ready to explore plant-based living? This blog is your go-to guide for starting a plant-based diet with easy recipes, nutritional tips, and the benefits of going green."
    }
  ];

  return (
    <div className="blog-section">
      <div className="container">
        <div className="header">
          <p className="subtitle">OUR BLOGS</p>
          <h2 className="title">Your Latest Health Boost!</h2>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="card-header">
                <div className="date-box">
                  <div className="day">{post.day}</div>
                  <div className="month">{post.month}</div>
                </div>
                <div className="meta-info">
                  <p className="author">By: {post.author}</p>
                  <div className="stats">
                    <span>{post.likes} Likes</span>
                    <span className="dot">•</span>
                    <span>{post.shares} Shares</span>
                  </div>
                </div>
              </div>
              
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.description}</p>
              
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;