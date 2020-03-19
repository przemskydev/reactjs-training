import React from 'react';
import './style/TaskTodo.css';

const TaskTodo = props => {
  const title = <h3>{props.element.title}</h3>;

  return (
    <div className='card'>
      {title}
      <div className='buttons'>
        <button type='button'>Done</button>
        <button type='button'>Delete</button>
      </div>
    </div>
  )
}

export default TaskTodo;