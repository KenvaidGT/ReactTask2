import React, { useState } from 'react';

function Profile() {
    const [bgColor, setBgColor] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const colors = ['crimson', 'Tomato', 'DodgerBlue', 'MediumSeaGreen', 'Gold', 'DeepPink'];
    const [colorIndex, setColorIndex] = useState(-1);

    const sayHello = () => {
        alert('Hello, Timur');
    };

    const showTime = () => {
        const now = new Date();
        setCurrentTime(`Current time: ${now.toLocaleString()}`);
    };

    return (
        <div style={{ backgroundColor: bgColor }}>
            <h1 id="main-heading">My Profile</h1>

            <img src="https://media.discordapp.net/attachments/1165574011535757322/1446117133053333616/20251119_145700.jpg?ex=6932d108&is=69317f88&hm=1c283a650c20a19c941868fc98147143ff7c721779774c9cea755592b00d3b13&=&format=png&width=446&height=956" alt="Profile Photo" id="profile-pic" />

            <h2>My Hobbies</h2>
            <ul id="hobby-list">
                <li>Photography</li>
                <li>Traveling</li>
                <li>Coding</li>
                <li>Music</li>
            </ul>

            <div className="buttons">
                <button onClick={sayHello}>Say Hello</button>
                <button onClick={showTime}>Show Time</button>
            </div>

            <p>{currentTime}</p>

        </div>
    );
}

export default Profile;