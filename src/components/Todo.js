import React from 'react';
import Input from './Input';
import TaskTodo from './TaskTodo';
import Buttons from './Buttons'
import { Container, Row, Col } from 'react-bootstrap';
import './style/Todo.css';


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        list: [
          { id: 1, title: 'Zrobić obiad', isCompleted: false },
          { id: 1, title: 'Zrobić obiad', isCompleted: false }
        ]
    }
  }

  render() {

    const welcome = <h1>Hello there!</h1>;

    const listOfTasks = this.state.list.map(el => {
      return <TaskTodo key={el.id} element={el} />
    });

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md='8' className="text-center height">
            {welcome}
            <Input />
            <Row>
              {listOfTasks}
            </Row>
            <Buttons />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Todo;