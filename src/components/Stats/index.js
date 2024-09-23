import React, {Component} from 'react'

class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      replaceValue: '',
    }
  }

  // Word count (Unique words and character count excluding spaces)
  getWordCount = text => {
    const words = text.match(/\b\w+\b/g)
    return words ? words.length : 0
  }

  getUniqueWordCount = text => {
    const words = text.match(/\b\w+\b/g)
    const uniqueWords = new Set(
      words ? words.map(word => word.toLowerCase()) : [],
    )
    return uniqueWords.size
  }

  getCharacterCount = text => {
    return text.replace(/\s|[.,?!]/g, '').length
  }

  // Handle form input changes
  handleSearchChange = event => {
    this.setState({searchValue: event.target.value})
  }

  handleReplaceChange = event => {
    this.setState({replaceValue: event.target.value})
  }

  handleReplaceClick = () => {
    const {searchValue, replaceValue} = this.state
    this.props.onReplace(searchValue, replaceValue)
  }

  render() {
    const {text} = this.props
    const {searchValue, replaceValue} = this.state

    return (
      <div>
        <h2>Statistics</h2>
        <p>Word Count: {this.getWordCount(text)}</p>
        <p>Unique Word Count: {this.getUniqueWordCount(text)}</p>
        <p>
          Character Count (excluding spaces): {this.getCharacterCount(text)}
        </p>

        <h2>String Replacement</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={this.handleSearchChange}
        />
        <input
          type="text"
          placeholder="Replace"
          value={replaceValue}
          onChange={this.handleReplaceChange}
        />
        <button onClick={this.handleReplaceClick}>Replace</button>
      </div>
    )
  }
}

export default Stats
