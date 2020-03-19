import React from 'react';
import Input from './Input';
import TaskTodo from './TaskTodo';
import { Container, Row, Col } from 'react-bootstrap';


class Todo extends React.Component {
  state = {
    list: [
      { id: 1, title: 'Zrobić obiad', isCompleted: false }
    ]
  }

  render() {

    const welcome = <h1>Hello there!</h1>;
    const listOfTasks = this.state.list.map(el => {
      return <TaskTodo key={el.id} element={el} />
    });

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            {welcome}
            <Input />
            {listOfTasks}
            <button type='button'>All</button>
            <button type='button'>Active</button>
            <button type='button'>Completed</button>
            <button type='button'>Clear completed</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Todo;