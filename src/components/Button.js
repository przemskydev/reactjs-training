import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.formatAtt = this.formatAtt.bind(this)
    this.wtf = this.wtf.bind(this) 
  }

  formatAtt(id) {
    if (typeof id !== 'string') return ''
    return id.charAt(0).toUpperCase() + id.slice(1)
  }

  wtf() {
    this.props.click();
  }

  render() {
    const id = this.props.id

    return (
      <button id={id} type='button' onClick={this.wtf}>{this.formatAtt(id)}</button>
    )
  }
}

export default Button;