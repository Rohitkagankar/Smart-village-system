// src/pages/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <header className="education-header">
        <h1>Education Services</h1>
        <p>Empowering students and villagers through quality education and skill development.</p>
      </header>

      <section className="online-courses-section">
        <h2>Online Courses</h2>
        <div className="courses-cards">
          <div className="card">
            <h3>Primary and Secondary Education</h3>
            <p>Access online classes for school children with a focus on math, science, and language learning.</p>
          </div>
          <div className="card">
            <h3>Higher Education</h3>
            <p>Explore online university courses and professional certifications for higher education.</p>
          </div>
          <div className="card">
            <h3>Adult Education</h3>
            <p>Enroll in adult education programs to complete unfinished schooling or gain new knowledge.</p>
          </div>
        </div>
      </section>

      <section className="skill-development-section">
        <h2>Skill Development Programs</h2>
        <div className="skill-cards">
          <div className="card">
            <h3>Vocational Training</h3>
            <p>Learn practical skills in areas such as agriculture, carpentry, tailoring, and more.</p>
          </div>
          <div className="card">
            <h3>IT and Digital Skills</h3>
            <p>Get hands-on training in computer skills, coding, and using digital tools for everyday tasks.</p>
          </div>
          <div className="card">
            <h3>Entrepreneurship</h3>
            <p>Participate in programs that teach business skills, entrepreneurship, and small business management.</p>
          </div>
        </div>
      </section>

      <section className="gov-schemes-section">
        <h2>Government Educational Schemes</h2>
        <ul>
          <li>Mid-Day Meal Scheme</li>
          <li>Right to Education (RTE) Act</li>
          <li>Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</li>
          <li>Samagra Shiksha Abhiyan</li>
          <li>National Scholarship Scheme</li>
        </ul>
      </section>

      <section className="local-institutions-section">
        <h2>Local Schools & Colleges</h2>
        <div className="institutions-cards">
          <div className="card">
            <h3>ABC Primary School</h3>
            <p>Providing quality primary education with a focus on holistic child development.</p>
          </div>
          <div className="card">
            <h3>XYZ High School</h3>
            <p>A secondary school focused on academics, sports, and extra-curricular activities.</p>
          </div>
          <div className="card">
            <h3>PQR College</h3>
            <p>A local college offering undergraduate courses in arts, science, and commerce streams.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>For any educational support or queries, reach out to us at:</p>
        <p>Email: education@smartvillagesystem.com</p>
        <p>Phone: +91 87654 32109</p>
      </section>
    </div>
  );
};

export default Education;
