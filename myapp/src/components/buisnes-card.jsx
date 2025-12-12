// components/AboutPage.jsx

import React from 'react';

function BuisnesCard() {
    return (
    <>
      <h1>Business Card (Flexbox)</h1>

      <div className="business-card">
        <img 
          src="https://thumbs.dreamstime.com/b/minecraft-186775550.jpg" 
          alt="Profile" 
        />
        <div className="info">
          <h2>John Doe</h2>
          <p className="role">Front-end Learner</p>
          <p>Learning Flexbox and building modern responsive layouts.</p>
          <a href="https://en.wikipedia.org/wiki/Steve_Jobs" className="btn">Learn More</a>
        </div>
      </div>

    </>
  );
}

export default BuisnesCard;