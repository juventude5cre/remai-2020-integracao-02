import React, { Component } from 'react'
import './input.css'


export class GuessInput extends Component {
  render() {
    const { index, value, onChange, check } = this.props
    const placeholder = check === "wrong" ? "Palavra errada!" : "" 
    return (
      <div className={"guess container " + check}>
        <div className={"guess label " + check}>
          <p>{index}:</p>
        </div>
        <div className={"guess input " + check}>
          <input type="text" value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
        </div>
      </div>
    )
  }
}