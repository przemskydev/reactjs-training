import React, { useState } from 'react';

const Input = () => {
  const [addTask, setAddTask] = useState('')

  return (
    <div>
      <input
        type='addTask'
        value={addTask}
        placeholder='Add task'
        onChange={e => setAddTask(e.target.value)} />
      <button type='button'>Add task</button>
    </div>
  )
}

export default Input;

