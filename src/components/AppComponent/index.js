import React, {Component} from 'react'
import Textarea from './Textarea'
import Stats from './Stats'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  // Update the text as the user types
  handleTextChange = newText => {
    this.setState({text: newText})
  }

  // Replace the string in the text
  handleReplace = (searchValue, replaceValue) => {
    const {text} = this.state
    const updatedText = text.replaceAll(searchValue, replaceValue)
    this.setState({text: updatedText})
  }

  render() {
    const {text} = this.state

    return (
      <div>
        <h1>Text Analyzer</h1>
        <Textarea text={text} onTextChange={this.handleTextChange} />
        <Stats text={text} onReplace={this.handleReplace} />
      </div>
    )
  }
}

export default App
