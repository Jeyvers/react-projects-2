import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  const [inputText, setInputText] = useState('');

  return (
    <div className='App'>
      <header>
        <h1>Todo List 3</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
