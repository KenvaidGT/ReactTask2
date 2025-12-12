import React from 'react';
import { useState } from 'react';

function Counter() {    
    const [count, setCount] = useState(0);

    return (
        <div className="counter-panel">
            <p className="counter-label">Skaits: {count}</p>
            <div className="counter-actions">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button> 
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );


}

export default Counter;
