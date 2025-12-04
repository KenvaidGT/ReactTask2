import React from 'react';
import { useState } from 'react';

function Counter() {    
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Skaits: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button> 
        </div>
    );


}

export default Counter;