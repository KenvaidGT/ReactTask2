import React from 'react';
import { useState } from 'react';

function Task3() {    
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function addTask() {
        setTasks([...tasks, task]);
        setTask('');
    }

    function Delete() {
        setTasks([]);
    }

    return (
        <div>
            <input value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <button onClick={Delete}>Clear All</button>
            <ul>{tasks.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </div>
    );

}

export default Task3;