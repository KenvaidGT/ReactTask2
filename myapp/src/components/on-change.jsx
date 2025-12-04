import React from 'react';
import { useState } from 'react';

function OnChange() {    
    const [text, setText] = useState('');

    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <p>Entered text: {text}</p>
        </div>
    );
}

export default OnChange;