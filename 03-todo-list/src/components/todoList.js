import React from 'react';
import Todo from './todo';
const todoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map((todo) => {
          return (
            <Todo {...todo} key={todo.id} setTodos={setTodos} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
};

export default todoList;
