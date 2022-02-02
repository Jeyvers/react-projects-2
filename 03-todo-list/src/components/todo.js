import React from 'react';

const Todo = ({ text, completed, id, todos, setTodos }) => {
  const completeHandler = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };
  const deleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <div className='todo'>
      <li className={`todo-item ${completed ? 'completed' : ''}`}>{text}</li>
      <button className='complete-btn' onClick={() => completeHandler(id)}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={() => deleteHandler(id)}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
