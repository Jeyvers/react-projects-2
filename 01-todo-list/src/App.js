import React, { useState } from 'react';
import './index.css';
import Form from './form.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (index) =>
    setTodos(
      todos.map((todo, key) =>
        key === index
          ? {
              ...todo,
              complete: !todo.complete,
            }
          : todo
      )
    );
  return (
    <>
      <div className='App'>
        <Form
          onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
        />
      </div>
      <div>
        {todos.map(({ text, complete }, index) => (
          <div
            key={text}
            onClick={() => toggleComplete(index)}
            style={{ textDecoration: complete ? 'line-through' : '' }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>Reset</button>
    </>
  );
};

export default App;
