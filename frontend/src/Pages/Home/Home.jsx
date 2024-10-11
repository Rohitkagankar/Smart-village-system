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

      {/* New Section: Impact Stats */}
      <section className="statistics-section">
        <h2>Our Impact</h2>
        <div className="statistics-cards">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Farmers trained with modern techniques</p>
          </div>
          <div className="stat-card">
            <h3>1,000+</h3>
            <p>Children educated through digital platforms</p>
          </div>
          <div className="stat-card">
            <h3>250+</h3>
            <p>New jobs created in rural communities</p>
          </div>
        </div>
      </section>

      {/* New Section: Testimonials */}
      <section className="testimonials-section">
        <h2>What Villagers Say</h2>
        <div className="testimonials">
          <blockquote>
            <p>"The healthcare services provided by the Smart Village System saved my life. I am forever grateful!"</p>
            <cite>- Ramesh, Farmer</cite>
          </blockquote>
          <blockquote>
            <p>"Thanks to the new educational programs, my children have access to quality education right from our village."</p>
            <cite>- Savita, Teacher</cite>
          </blockquote>
        </div>
      </section>

      {/* New Section: Call to Action */}
      <section className="join-section">
        <h2>Become a Volunteer</h2>
        <p>Join hands with us to contribute to the growth and development of rural communities.</p>
        <Link to="/join-us" className="join-btn">Join Us</Link>
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
