import React, { Component } from 'react'


export class Input extends Component {
  constructor(props) {
    super(props)
    const { word, index } = props
    this.word = word
    this.index = index
  }

  render() {
    const { index } = this
    return (
      <div>
        <label>{index}.</label>
        <input type="text" />
      </div>
    )
  }
}