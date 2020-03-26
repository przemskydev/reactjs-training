import React from 'react';
import Button from './Button';
import './style/Buttons.css'
import './style/TaskTodo.css'



class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.removeTask = this.removeTask.bind(this);
    this.showCard = this.showCard.bind(this)

  }

  showCard(index) {
    switch (index) {
      case 'all':
        this.props.show({
          buttonAttr: index
        })
        break;
      case 'active':
        this.props.show({
          buttonAttr: index
        })
        break;
      case 'completed':
        this.props.show({
          buttonAttr: index
        })
        break;
      default:
        console.log('PRAY')
    }
  }

  removeTask() {
    const elementIndex = this.props.list.map(elem => elem.isCompleted ? elem.id : '');
    this.props.remove(elementIndex)
  }

  render() {
    return (
      <div className='btnPos'>
        <Button
          id='all'
          click={this.showCard}
        />
        <Button
          id='active'
          click={this.showCard} />
        <Button
          id='completed'
          click={this.showCard}
        />
        <Button
          id='clear'
          click={this.removeTask}
        />
      </div>
    )
  }
}

export default Buttons;