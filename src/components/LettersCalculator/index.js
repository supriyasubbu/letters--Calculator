// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculate extends Component {
  state = {word: ''}

  getWord = event => {
    const {value} = event.target
    this.setState({word: value})
  }

  // getCount = () => {
  //  const {word} = this.state
  //  if (word !== '') {
  //   this.setState({count: word.length})
  //  }
  //  }

  render() {
    const {word} = this.state
    return (
      <div className="app-container">
        <div className="letters-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="container">
              <label htmlFor="letter" className="label">
                Enter the phrase
              </label>
              <input
                type="text"
                id="letter"
                className="input-style"
                placeholder="Enter the phrase"
                onChange={this.getWord}
                value={word}
              />
            </div>
            <p className="no-of-letters">No.of letters: {word.length}</p>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculate
