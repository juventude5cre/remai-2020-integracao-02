import React, { Component } from 'react'
import { GuessInput } from './input'
import data from './data.json'
import './app.css'


export class App extends Component {
  constructor(props) {
    super(props)
    const { words } = data
    this.state = {
      check: words.map(_ => false),

    }
  }

  renderInput(w, i) {
    return <GuessInput word={w} index={i + 1} />
  }

  render() {
    const { title, text, words } = data
    return (
      <div class="app container">
        <div class="app spacer" />
        <div class="app" id="pane">
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" className="app" id="check-button" onClick={() => null}>
            Verificar
          </button>
          {words.map((w, i) => this.renderInput(w, i))}
        </div>
        <div class="app spacer" />
      </div>
    )
  }
}