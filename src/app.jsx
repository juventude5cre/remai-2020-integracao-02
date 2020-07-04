import React, { Component } from 'react'
import { Input } from './input'
import data from './data.json'


export class App extends Component {
  constructor(props) {
    super(props)
    const { words } = data
    this.state = {
      check: words.map(_ => false),

    }
  }

  renderInput(w, i) {
    return <Input word={w} index={i + 1} />
  }

  render() {
    const { title, text, words } = data
    return (
      <div id="background">
        <div id="pane">
          <h1>{title}</h1>
          <p>{text}</p>
          {words.map((w, i) => this.renderInput(w, i))}
        </div>
      </div>
    )
  }
}