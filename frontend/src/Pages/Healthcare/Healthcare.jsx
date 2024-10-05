// src/pages/Healthcare.js
import React from 'react';
import './Healthcare.css';

const Healthcare = () => {
  return (
    <div className="healthcare-page">
      <header className="healthcare-header">
        <h1>Healthcare Services</h1>
        <p>Providing accessible and reliable healthcare for everyone in the village</p>
      </header>

      <section className="telemedicine-section">
        <h2>Telemedicine Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Online Consultations</h3>
            <p>Connect with doctors online for diagnosis and treatment from the comfort of your home.</p>
          </div>
          <div className="card">
            <h3>Prescription Refills</h3>
            <p>Get your prescriptions refilled through online platforms with doctor approval.</p>
          </div>
          <div className="card">
            <h3>Remote Health Monitoring</h3>
            <p>Monitor chronic conditions with wearable devices and real-time data tracking.</p>
          </div>
        </div>
      </section>

      <section className="health-education-section">
        <h2>Health Education</h2>
        <div className="education-cards">
          <div className="card">
            <h3>Preventive Care Tips</h3>
            <p>Learn about maintaining a healthy lifestyle and preventing common diseases through simple steps.</p>
          </div>
          <div className="card">
            <h3>Nutrition and Diet</h3>
            <p>Discover the importance of balanced nutrition and healthy eating for overall well-being.</p>
          </div>
          <div className="card">
            <h3>Mental Health Awareness</h3>
            <p>Understand the significance of mental health and how to access support services.</p>
          </div>
        </div>
      </section>

      <section className="emergency-services-section">
        <h2>Emergency Services</h2>
        <p>In case of a medical emergency, please contact the following:</p>
        <ul>
          <li>Ambulance: 102</li>
          <li>Police: 100</li>
          <li>Fire Department: 101</li>
          <li>Nearest Hospital: XYZ Hospital (+91 12345 67890)</li>
        </ul>
      </section>

      <section className="medical-resources-section">
        <h2>Nearby Medical Resources</h2>
        <div className="resources-cards">
          <div className="card">
            <h3>Hospitals</h3>
            <p>Access the list of hospitals nearby with contact details and specializations.</p>
          </div>
          <div className="card">
            <h3>Pharmacies</h3>
            <p>Find nearby pharmacies for medicines and healthcare supplies.</p>
          </div>
          <div className="card">
            <h3>Clinics</h3>
            <p>Get information on local clinics offering primary healthcare services.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you need any further healthcare assistance, reach out to us at:</p>
        <p>Email: healthcare@smartvillagesystem.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>
    </div>
  );
};

export default Healthcare;
