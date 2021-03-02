import React from 'react';

import { useState } from 'react';
import { v4 } from 'uuid';
import TodoListItem from './TodoListItem';

import './TodoList.scss';

const TodoList = () => {
    const [list, updateList] = useState([]);
    const [inputValue, updateInputValue] = useState('');

    const addTask = (event) => {
        event.preventDefault();

        if (inputValue.trim() !== '') {
            // callback
            updateList((prev) => [
                ...prev,
                { task: inputValue, done: false, id: v4() },
            ]);
            updateInputValue('');
        }
    };

    const clearAll = () => updateList([]);

    const toggleTask = (toggling) => {
        updateList((prev) =>
            prev.map((item) => {
                if (item === toggling) {
                    return {
                        ...item,
                        done: !item.done,
                    };
                }
                return item;
            }),
        );
    };

    return (
        <>
            <ul className="todo-list">
                {list
                    .filter(({ done }) => !done)
                    .map((item) => (
                        <TodoListItem
                            key={item.id}
                            item={item}
                            toggleTask={toggleTask}
                        />
                    ))}
                {list
                    .filter(({ done }) => done)
                    .map((item) => (
                        <TodoListItem
                            key={item.id}
                            item={item}
                            toggleTask={toggleTask}
                        />
                    ))}
            </ul>
            <form className="todo-form" onSubmit={addTask}>
                <input
                    value={inputValue}
                    className="todo-form__input"
                    onChange={(e) => updateInputValue(e.target.value)}
                ></input>
                <button
                    type="submit"
                    className="todo-form__button"
                    onClick={addTask}
                >
                    add
                </button>
                <button
                    type="button"
                    className="todo-form__button"
                    onClick={clearAll}
                >
                    clear all
                </button>
            </form>
        </>
    );
};

export default TodoList;
