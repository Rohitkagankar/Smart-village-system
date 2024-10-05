// src/pages/EconomicDevelopment.js
import React from 'react';
import './EconomicDevelopment.css';

const EconomicDevelopment = () => {
  return (
    <div className="economic-development-page">
      <header className="economic-development-header">
        <h1>Economic Development</h1>
        <p>Empowering the village economy through tourism, business, agriculture, and work opportunities.</p>
      </header>

      <section className="tourism-development-section">
        <h2>Tourism Development</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Eco-tourism</h3>
            <p>Promote eco-friendly tourism by showcasing the village's natural beauty, wildlife, and traditional culture.</p>
          </div>
          <div className="card">
            <h3>Historical Sites</h3>
            <p>Develop historical landmarks and promote the rich history and heritage of the village.</p>
          </div>
          <div className="card">
            <h3>Homestays & Local Hospitality</h3>
            <p>Encourage homestays and local hospitality for tourists, providing villagers with additional income sources.</p>
          </div>
        </div>
      </section>

      <section className="business-opportunities-section">
        <h2>Business Opportunities</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Small-scale Industries</h3>
            <p>Encourage villagers to start small-scale industries such as handicrafts, pottery, and food processing.</p>
          </div>
          <div className="card">
            <h3>Entrepreneurship Training</h3>
            <p>Offer training programs that teach entrepreneurial skills and help villagers start their own businesses.</p>
          </div>
          <div className="card">
            <h3>Cooperative Businesses</h3>
            <p>Form cooperative businesses in agriculture, dairy farming, and poultry to share resources and profits.</p>
          </div>
        </div>
      </section>

      <section className="agriculture-support-section">
        <h2>Agriculture Support</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Improved Farming Techniques</h3>
            <p>Introduce modern farming techniques like drip irrigation, organic fertilizers, and crop rotation.</p>
          </div>
          <div className="card">
            <h3>Farmers' Cooperatives</h3>
            <p>Encourage the formation of cooperatives for better market access, shared equipment, and bulk selling of crops.</p>
          </div>
          <div className="card">
            <h3>Agri-tech Solutions</h3>
            <p>Promote the use of agri-tech solutions such as crop disease prediction, soil testing, and weather forecasting apps.</p>
          </div>
        </div>
      </section>

      <section className="work-areas-section">
        <h2>Work Opportunities</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Industrial Training</h3>
            <p>Offer industrial training programs that help villagers learn skills like carpentry, electrical work, and welding.</p>
          </div>
          <div className="card">
            <h3>Self-Employment Opportunities</h3>
            <p>Promote self-employment through small businesses like tailoring, food stalls, and small retail shops.</p>
          </div>
          <div className="card">
            <h3>Employment in Local Businesses</h3>
            <p>Connect villagers to job opportunities in nearby industries, shops, and construction projects.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>For any economic development assistance or inquiries, feel free to contact us at:</p>
        <p>Email: economicdev@smartvillagesystem.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default EconomicDevelopment;
