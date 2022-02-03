import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';

function App() {
  // States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Useeffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();

    // return () => {
    //   second;
    // };
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem('todos', JSON.stringify('todos'))
      );
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Todo List 3</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
