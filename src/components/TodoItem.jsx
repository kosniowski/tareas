import React from 'react';
//import { Input } from '@material-ui/core';


export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;

    // creamos una funcion para poder pasarle toggletodo como argumento

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li style={{fontFamily: 'monospace',listStyle: 'none',fontSize: '20px'}}>
            <input type='checkbox' checked={completed} onChange={handleTodoClick} /> {task}
        </li>
          
    );
}
