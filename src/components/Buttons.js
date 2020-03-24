import React from 'react';
import Button from './Button';
import './style/Buttons.css'
import './style/TaskTodo.css'



class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.removeTask = this.removeTask.bind(this);
    this.show = this.show.bind(this)

  }

  show() {
    const list = this.props.list.map(el => el)
    console.log("list")
  }

  removeTask() {
    const elementIndex = this.props.list.map(elem => elem.isCompleted ? elem.id : '');
    this.props.remove(elementIndex)
  }

  render() {
    return (
      <div className='btnPos'>
        <Button id='all' />
        <Button id='active' />
        <Button id='completed' />
        <Button
          id='clear'
          click={this.removeTask}
        />
      </div>
    )
  }
}

export default Buttons;