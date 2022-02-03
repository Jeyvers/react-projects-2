import React from 'react';
import Todo from './todo';
const todoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => {
          return (
            <Todo {...todo} key={todo.id} setTodos={setTodos} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
};

export default todoList;
