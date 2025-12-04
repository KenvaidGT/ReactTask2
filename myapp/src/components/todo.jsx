// components/AboutPage.jsx

import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        const trimmedValue = inputValue.trim();
        if (!trimmedValue) return;

        setTodos([...todos, { text: trimmedValue, done: false }]);
        setInputValue('');
    };

    const toggleTodo = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, done: !todo.done } : todo
        );
        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Enter a new task"
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.done ? 'done' : ''}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => toggleTodo(index)}
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => removeTodo(index)}>✕</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;