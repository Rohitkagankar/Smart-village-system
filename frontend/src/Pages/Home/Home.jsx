// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the Smart Village System</h1>
        <p>Empowering rural communities through digital transformation and sustainable development.</p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </header>

      <section className="key-services-section">
        <h2>Our Key Services</h2>
        <div className="services-cards">
          <div className="card">
            <h3>Agriculture</h3>
            <p>Enhancing farming techniques and agricultural productivity using modern technologies.</p>
            <Link to="/agriculture" className="learn-more-btn">Learn More</Link>
          </div>
          <div className="card">
            <h3>Healthcare</h3>
            <p>Improving access to healthcare facilities and services for all villagers.</p>
            <Link to="/healthcare" className="learn-more-btn">Learn More</Link>
          </div>
          <div className="card">
            <h3>Education</h3>
            <p>Providing quality education, skill development programs, and online learning opportunities.</p>
            <Link to="/education" className="learn-more-btn">Learn More</Link>
          </div>
          <div className="card">
            <h3>Economic Development</h3>
            <p>Boosting the local economy through tourism, business ideas, and employment opportunities.</p>
            <Link to="/economic-development" className="learn-more-btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>About Smart Village System</h2>
        <p>Our mission is to bring sustainable development to rural areas by leveraging technology, improving local resources, and providing access to essential services.</p>
        <p>We believe in creating self-sufficient communities where villagers have the tools and knowledge to improve their quality of life.</p>
      </section>

      <section className="community-section">
        <h2>Join Our Community</h2>
        <p>Stay connected with upcoming programs, workshops, and events that promote growth and development in our village.</p>
        <Link to="/events" className="events-btn">Upcoming Events</Link>
      </section>

      <footer className="footer">
        <p>Contact us: info@smartvillagesystem.com | +91 98765 43210</p>
        <div className="social-media-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
