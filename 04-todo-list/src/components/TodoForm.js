import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        value={input}
        placeholder='Add a todo'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='todo-button' type='submit'>
        Add a todo
      </button>
    </form>
  );
};

export default TodoForm;
// github.com/briancodex/react-todo-app-v1
