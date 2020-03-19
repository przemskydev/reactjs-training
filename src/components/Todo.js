import React from 'react';
import Input from './Input';
import TaskTodo from './TaskTodo';


class Todo extends React.Component {
  state = {
    list: [
      {id: 1, title: 'Zrobić obiad', isCompleted: false}
    ]
  }

  render() {

    const welcome = <h1>Hello there!</h1>;
    const listOfTasks = this.state.list.map(el => {
      return <TaskTodo key={el.id} element={el}/>
    });

    return (
      <div>
        {welcome}
        <Input />
        {listOfTasks}
        <button type='button'>All</button>
        <button type='button'>Active</button>
        <button type='button'>Completed</button>
        <button type='button'>Clear completed</button>
      </div>
    )
  }
}

export default Todo;