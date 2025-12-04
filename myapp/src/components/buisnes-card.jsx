// components/AboutPage.jsx

import React from 'react';

// Создаем "страничку" - это функция, которая возвращает то, что мы увидим
function BuisnesCard() {
    return (
    <>
      <h1>Business Card (Flexbox)</h1>

      <div className="business-card">
        <img 
          src="https://media.discordapp.net/attachments/1165574011535757322/1446117133053333616/20251119_145700.jpg?ex=6932d108&is=69317f88&hm=1c283a650c20a19c941868fc98147143ff7c721779774c9cea755592b00d3b13&=&format=png&width=446&height=956" 
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

// Делаем нашу "страничку" доступной для использования в других файлах
export default BuisnesCard;