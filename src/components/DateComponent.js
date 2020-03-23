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

    if(newDate<59){
      newDate++;
    } else{
      newHour++;
      newDate=0
    }

    this.setState({
      time: newDate,
      hour: newHour
    })

  }

  render() {
    let dateStr = this.state.time.toString();
    let hourStr = this.state.hour.toString();


    return (
      <small className="text-muted">Added: {`${hourStr < 10 ? 0 : ''}${hourStr} hour ${dateStr < 10 ? 0 : ''}${dateStr} min ago`}</small>
    )
  }
}

export default DateComponent;