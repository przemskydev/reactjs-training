import React from 'react';
import './style/TaskTodo.css';
import DateComponent from './DateComponent'

import { Col, Button, Card } from 'react-bootstrap';

class TaskTodo extends React.Component {
  constructor(props) {
    super(props);
    this.setTaskDone = this.setTaskDone.bind(this);
  }

  setTaskDone() {
    const elementIndex = this.props.element.id;
    this.props.doneTask(elementIndex);
  }

  render() {
    const title = <h3>{this.props.element.title}</h3>;
    const isCompleted = this.props.element.isCompleted;

    return (
      <Col>
        <Card className={`${isCompleted ? 'completed' : ''}`}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className='buttons'>
              <Button onClick={this.setTaskDone}
                variant="outline-success">Done</Button>
              <Button
                variant="outline-danger">Delete</Button>
            </div>
          </Card.Body>
          <Card.Text>
            <DateComponent />
          </Card.Text>
        </Card>
      </Col>
    )
  }
}

export default TaskTodo;