import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e){
    this.props.valueChange(e.target.value);
  }

  addTask(){
    this.props.addNewTask()
  }

  render() {
    return (
      <div>
        <input
          type='addTask'
          value={this.props.value}
          placeholder='Add task'
          onChange={this.handleChange} />
        <button type='button' onClick={this.addTask} >Add task</button>
      </div>
    )
  }
}

export default Input;

