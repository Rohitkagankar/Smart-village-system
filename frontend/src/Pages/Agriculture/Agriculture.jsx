// src/pages/Agriculture.js
import React from 'react';
import './Agriculture.css';

const Agriculture = () => {
  return (
    <div className="agriculture-page">
      <header className="agriculture-header">
        <h1>Agriculture Services</h1>
        <p>Empowering farmers with the latest technology, trends, and government support</p>
      </header>

      <section className="trends-section">
        <h2>Latest Trends in Agriculture</h2>
        <div className="trend-cards">
          <div className="card">
            <h3>Organic Farming</h3>
            <p>Learn the benefits of organic farming and how to get started with eco-friendly practices.</p>
          </div>
          <div className="card">
            <h3>Precision Agriculture</h3>
            <p>Utilize GPS and IoT technologies to optimize your farm's productivity and efficiency.</p>
          </div>
          <div className="card">
            <h3>Water Conservation</h3>
            <p>Implement smart irrigation techniques to conserve water while maintaining crop yield.</p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Agricultural Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Crop Disease Prediction</h3>
            <p>Use AI-powered solutions to predict crop diseases early and minimize crop loss.</p>
          </div>
          <div className="card">
            <h3>Crop Information</h3>
            <p>Get detailed information about different crops, their growing conditions, and harvesting tips.</p>
          </div>
          <div className="card">
            <h3>Organic Fertilizers</h3>
            <p>Learn about organic fertilizers and how they can improve soil health and crop yields.</p>
          </div>
          <div className="card">
            <h3>Water Irrigation Systems</h3>
            <p>Discover modern water irrigation systems that help conserve water while boosting efficiency.</p>
          </div>
        </div>
      </section>

      <section className="government-schemes-section">
        <h2>Government Schemes for Farmers</h2>
        <ul>
          <li>Pradhan Mantri Fasal Bima Yojana</li>
          <li>Kisan Credit Card (KCC)</li>
          <li>Soil Health Card Scheme</li>
          <li>National Agriculture Market (eNAM)</li>
          <li>Paramparagat Krishi Vikas Yojana (PKVY)</li>
        </ul>
      </section>

      <section className="smart-farming-section">
        <h2>Smart Farming Technologies</h2>
        <div className="smart-tech">
          <div>
            <h3>IoT Sensors</h3>
            <p>Monitor soil moisture, crop health, and weather conditions with real-time data.</p>
          </div>
          <div>
            <h3>AI in Agriculture</h3>
            <p>Use artificial intelligence to predict crop yields and identify potential risks.</p>
          </div>
          <div>
            <h3>Drone Technology</h3>
            <p>Deploy drones to survey land, distribute seeds, and monitor crops efficiently.</p>
          </div>
        </div>
      </section>

      {/* New section: Farmer Success Stories */}
      <section className="success-stories-section">
        <h2>Success Stories</h2>
        <div className="story-cards">
          <div className="card">
            <h3>Improved Yield through AI Technology</h3>
            <p>Read about how farmer Arjun Patil increased his crop yield by 25% using AI-driven crop health monitoring.</p>
          </div>
          <div className="card">
            <h3>Water Conservation Success in Maharashtra</h3>
            <p>Discover how the use of smart irrigation helped a community in Maharashtra save 40% water while maintaining yield.</p>
          </div>
          <div className="card">
            <h3>Organic Farming Revolution in Punjab</h3>
            <p>Learn how a group of farmers in Punjab transitioned to organic farming and are now recognized nationwide for their efforts.</p>
          </div>
        </div>
      </section>

      {/* New section: Workshops and Training */}
      <section className="workshops-section">
        <h2>Workshops & Training</h2>
        <div className="workshop-cards">
          <div className="card">
            <h3>Organic Farming Workshop</h3>
            <p>Join our workshop on organic farming practices and learn directly from experts.</p>
            <p><strong>Date:</strong> 15th October 2024</p>
          </div>
          <div className="card">
            <h3>AI & IoT in Agriculture</h3>
            <p>Learn how to leverage AI and IoT technologies to revolutionize your farming methods.</p>
            <p><strong>Date:</strong> 20th October 2024</p>
          </div>
          <div className="card">
            <h3>Water Management Strategies</h3>
            <p>Explore advanced water conservation techniques to improve farm sustainability.</p>
            <p><strong>Date:</strong> 25th October 2024</p>
          </div>
        </div>
      </section>

      {/* New section: Farmer's Community */}
      <section className="community-section">
        <h2>Join the Farmer's Community</h2>
        <p>Connect with fellow farmers, share knowledge, and get the latest updates on farming trends and government policies.</p>
        <p>Sign up for our community forum and newsletter for regular updates:</p>
        <form className="community-form">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you need help with farming-related queries, feel free to contact us at:</p>
        <p>Email: support@smartvillagesystem.com</p>
        <p>Phone: +91 12345 67890</p>
      </section>
    </div>
  );
};

export default Agriculture;
