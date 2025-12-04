import React, { useState } from 'react';

function Hobbies() {
    const [hobbies, setHobbies] = useState(['Photography', 'Cycling', 'Gaming', 'Cooking', 'Reading']);

    const shuffleHobbies = () => {
        const shuffled = [...hobbies].sort(() => Math.random() - 0.5);
        setHobbies(shuffled);
    };

    return (
        <div>
            <h1>My Hobbies</h1>

            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>

            <button onClick={shuffleHobbies}>Shuffle Hobbies</button>
        </div>
    );
}

function AboutPage() {
  return (
    <>
    <h1>Dynamic Hobbies (JS Arrays)</h1>

    <Hobbies />
    </>
  );
}

export default AboutPage;