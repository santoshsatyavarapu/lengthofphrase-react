// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lengthOfPhrase: 0}

  findLength = event => {
    const enterValue = event.target.value
    this.setState({lengthOfPhrase: enterValue.length})
  }

  render() {
    const {lengthOfPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="left-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input onChange={this.findLength} id="input" />
          <p className="button">No.of letters: {lengthOfPhrase}</p>
        </div>
        <div className="right-card ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
