import React from 'react';
import './style/TaskTodo.css';
import DateComponent from './DateComponent'

import { Button, Card } from 'react-bootstrap';

class TaskTodo extends React.Component {
  constructor(props) {
    super(props);
    this.setTaskDone = this.setTaskDone.bind(this);
    this.removeTask = this.removeTask.bind(this);

  }
  setTaskDone() {
    const elementIndex = this.props.element.id;
    this.props.doneTask(elementIndex);
  }

  removeTask() {
    const elementIndex = this.props.element.id;
    this.props.remove(elementIndex)
  }

  render() {
    const title = <h3>{this.props.element.title}</h3>;
    const isCompleted = this.props.element.isCompleted;
    let classComplete = `${isCompleted ? 'completed' : ''}`

    const isVisible = this.props.visibleCard;

    switch(isVisible){
      case 'all':
        classComplete = `${isCompleted ? 'completed' : ''}`
        break;
      case 'active':
        if((isVisible==='active') && (isCompleted===true)){
          classComplete = ' notVisible'
        }
        break;
      case 'completed':
        if((isVisible==='completed') && (isCompleted===false)){
          classComplete = ' notVisible'
        }
        break;
      default:
        classComplete = `${isCompleted ? 'completed' : ''}`
    }

    return (
        <Card className={classComplete}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className='buttons'>
              <Button
                onClick={this.setTaskDone}
                variant="outline-success">Done</Button>
              <Button
                onClick={this.removeTask}
                variant="outline-danger">Delete</Button>
            </div>
          </Card.Body>
          <Card.Text>
            <DateComponent
              isCompleted={isCompleted} />
          </Card.Text>
        </Card>
    )
  }
}

export default TaskTodo;