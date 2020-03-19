import React from 'react';
import './style/TaskTodo.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const TaskTodo = props => {
  const title = <h3>{props.element.title}</h3>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='buttons'>
          <Button variant="outline-success">Done</Button>
          <Button variant="outline-danger">Delete</Button>
        </div>
      </Card.Body>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card>
  )
}

export default TaskTodo;