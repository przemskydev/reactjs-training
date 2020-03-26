import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.formatAtt = this.formatAtt.bind(this)
    this.showingCards = this.showingCards.bind(this)
  }

  formatAtt(id) {
    if (typeof id !== 'string') return ''
    return id.charAt(0).toUpperCase() + id.slice(1)
  }

  showingCards(e) {
    this.props.click(e.target.id)
  }

  render() {
    const id = this.props.id

    return (
      <button id={id} type='button' onClick={this.showingCards}>{this.formatAtt(id)}</button>
    )
  }
}

export default Button;