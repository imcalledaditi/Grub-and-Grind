import React from 'react';
import './Blogs.css'; // Change back to regular CSS import

function Blogs() {
  const blogPosts = [
    {
      month: "Mar",
      author: "Rachael Hartley",
      likes: "57.8K",
      shares: "5.8K",
      title: "The Joy of Eating Blog",
      description: "Rachael Hartley, a registered dietitian, shares inspiring recipes and expert advice on intuitive eating, helping you cultivate a healthy, balanced, and joyful relationship with food. Discover delicious, creative dishes designed to nourish your body and soul while embracing the pleasure of eating.",
      link: "https://www.rachaelhartleynutrition.com/blog"
    },
    {
      month: "Apr",
      author: "Dr. Emily Carter, MD",
      likes: "94.5K",
      shares: "38K",
      title: "The Balanced Plate",
      description: "Live Forever Lab features articles by Dr. Emily Carter, MD, covering longevity, wellness, and cutting-edge health research. Her insights focus on science-backed strategies for healthy aging, disease prevention, and optimal well-being.",
      link: "https://liveforeverlab.com/author/dr-emily-carter-md/"
    },
    {
      month: "Aug",
      author: "Sofie Wise",
      likes: "73.2K",
      shares: "43.2K",
      title: "Women's Health Blogs",
      description: "PlushCare's Top 10 Women's Health Blogs provides expert-backed insights on fitness, nutrition, and mental health. It features curated resources to help women stay informed about wellness trends, self-care, and healthy living.",
      link: "https://plushcare.com/blog/top-10-womens-health-blogs/?utm_source=chatgpt.com"
    }
  ];

  const handleReadMore = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="blog-section" id="blogs">
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
              
              <button 
                className="read-more"
                onClick={() => handleReadMore(post.link)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;