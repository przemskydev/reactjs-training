import React from 'react';
import Input from './Input';
import TaskTodo from './TaskTodo';
import Buttons from './Buttons'
import { Container, Row, Col } from 'react-bootstrap';
import './style/Todo.css';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.state = {
      list: [
        { id: 1, title: 'Zrobić obiad', isCompleted: false },
      ],
      inputValue: ''
    }
  }

  addTaskToList() {
    const item = {
      id: Math.random(),
      title: this.state.inputValue,
      isCompleted: false
    };
    const newList = [item, ...this.state.list];
    this.setState({ list: newList })
    this.setState({
      inputValue: '',
    })
  }

  handleChange(value) {
    const newValue = value;
    this.setState({
      inputValue: newValue,
    })
  }

  handleDone(el){
    const elementIndex = this.state.list.findIndex(elem => elem.id == el)
    const newelement = this.state.list;
    newelement[elementIndex].isCompleted = true;
    this.setState({
      list: newelement
    })
    console.log(elementIndex)
  }

  render() {

    const welcome = <h1>Hello there!</h1>;
    const inputValues = this.state.inputValue

    const listOfTasks = this.state.list.map(el => {
      return (
        <TaskTodo
          key={el.id}
          element={el}
          doneTask = {this.handleDone}
        />
      )

    });

    return (
      <Container>
        <Row className="justify-content-center">
          <Col md='10' className="text-center height">
            {welcome}
            <Input
              valueChange={this.handleChange}
              value={inputValues}
              addNewTask={this.addTaskToList}
            />
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