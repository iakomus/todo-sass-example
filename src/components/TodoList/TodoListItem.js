import React from 'react';

const TodoListItem = ({ item, toggleTask }) => {
    return (
        <li>
            <input
                id={item.id}
                type="checkbox"
                checked={item.done}
                onChange={() => toggleTask(item)}
            />
            <label htmlFor={item.id}>{item.task}</label>
        </li>
    );
};

export default TodoListItem;
