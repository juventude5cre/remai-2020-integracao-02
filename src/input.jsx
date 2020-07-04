import React, { Component } from 'react'
import './input.css'


export class GuessInput extends Component {
  constructor(props) {
    super(props)
    const { word, index } = props
    this.word = word
    this.index = index
  }

  render() {
    const { index } = this
    return (
      <div className="guess container">
        <div className="guess label">
          <p>{index}.</p>
        </div>
        <div className="guess input">
          <input type="text" />
        </div>
      </div>
    )
  }
}