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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleShow =  this.handleShow.bind(this)

    this.state = {
      list: [
      ],
      inputValue: '',
      visibleCard: ''
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

  handleDone(el) {
    const elementIndex = this.state.list.findIndex(elem => elem.id === el)
    const newelement = this.state.list;
    newelement[elementIndex].isCompleted = true;
    this.setState({
      list: newelement
    })
  }

  handleRemove(elem) {
    const elIndex = this.state.list.findIndex(el => el.id === elem);
    let actualList = [...this.state.list]
    let listAfterRemove = '';
    let lastArray = [];

    const currentList = this.state.list.map(el => el.id);
    const listBeforeRemove = elem;

    if (typeof elem === "number") {
      actualList = actualList.slice(0, elIndex)
        .concat(actualList.slice(elIndex + 1, actualList.length))

      this.setState({
        list: actualList
      })

    } else {

      listAfterRemove = currentList.filter(item => !listBeforeRemove.includes(item));
      actualList.forEach(item1 => listAfterRemove.forEach(item2 => {
        if (item1.id === item2) {
          lastArray.push(item1)
        }
      }))

      this.setState({
        list: lastArray
      })
    }
  }

  handleShow(obj){
    this.setState({
      visibleCard: obj.buttonAttr
    })
  }

  render() {

    const welcome = <h1>Hello there!</h1>;
    const inputValues = this.state.inputValue

    const listOfTasks = this.state.list.map(el => {
      return (
        <TaskTodo
          key={el.id}
          element={el}
          doneTask={this.handleDone}
          remove={this.handleRemove}
          visibleCard={this.state.visibleCard}
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
            <Buttons
              list={this.state.list}
              remove={this.handleRemove}
              show={this.handleShow} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Todo;