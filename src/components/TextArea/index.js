import React, {Component} from 'react'

class Textarea extends Component {
  handleChange = event => {
    this.props.onTextChange(event.target.value)
  }

  render() {
    return (
      <div>
        <textarea
          rows="10"
          cols="50"
          value={this.props.text}
          onChange={this.handleChange}
          placeholder="Type your text here..."
        />
      </div>
    )
  }
}

export default Textarea
