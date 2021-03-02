import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                <button onClick={() => setDarkMode((prev) => !prev)}>
                    toggle mode
                </button>
                <TodoList />
            </div>
        </>
    );
}

export default App;
