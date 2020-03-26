import React from 'react';

class DateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      hour: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.updateDate(),
      150
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  updateDate() {
    let newDate = this.state.time;
    let newHour = this.state.hour;

    if (!this.props.isCompleted) {
      if (newDate < 59) {
        newDate++;
      } else {
        newHour++;
        newDate = 0
      }
    } else {
      clearInterval(this.timerId);
    }

    this.setState({
      time: newDate,
      hour: newHour
    })

  }

  render() {
    let dateStr = this.state.time.toString();
    let hourStr = this.state.hour.toString();
    const addedTotal = this.props.isCompleted ? 'Total time: ' : 'Added:';
    const totalHours = `${hourStr < 10 ? 0 : ''}${hourStr} hours`;
    const totalMinutes = `${dateStr < 10 ? 0 : ''}${dateStr} min`;
    const totalAgo = `${this.props.isCompleted ? '' : 'ago'}`

    return (
      <span>
        <small className="text-muted">{addedTotal} {totalHours} {totalMinutes} {totalAgo}</small>
      </span>
    )
  }
}

export default DateComponent;