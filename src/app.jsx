import React, { Component } from 'react'
import { GuessInput } from './input'
import { Secret } from './secret'
import data from './data.json'
import './app.css'


export class App extends Component {
  constructor(props) {
    super(props)
    const { words } = data
    this.state = {
      guesses: words.map(_ => ""),
      check: words.map(_ => "typing"),
      secret: false
    }
  }

  check() {
    const { state } = this
    const { words } = data
    let allOK = true
    const check = [], guesses = []
    state.guesses.forEach((g, i) => {
      const w = words[i]
      if (g === w) {
        check[i] = "ok"
        guesses[i] = g
      } else {
        check[i] = "wrong"
        guesses[i] = ""
        allOK = false
      }
    })
    
    if (allOK) {
      this.setState({ check, guesses, secret: true })
    } else {
      this.setState({ check, guesses, secret: false })
      setTimeout(() => {
        const check = this.state.check.map(c => c === "ok" ? "ok" : "typing")
        this.setState({ ...this.state, check })
      }, 2000)
    }
  }

  handleInputChange(v, i) {
    const { state } = this
    const guesses = [...state.guesses]
    const check = [...state.check]
    guesses[i] = v
    check[i] = "typing"
    this.setState({ check, guesses, secret: false })
  }

  renderInput(g, i) {
    const { check } = this.state
    return <GuessInput
      value={g}
      check={check[i]}
      index={i + 1}
      onChange={v => this.handleInputChange(v, i)}
      key={i}
    />
  }

  closeSecret() {
    this.setState({ ...this.state, secret: false })
  }

  render() {
    const { title, text } = data
    const { guesses, secret } = this.state
    return (
      <div className="app container">
        <div className="app spacer" />
        <div className="app" id="pane">
          <h1>{title}</h1>
          <p>{text}</p>
          <button type="button" className="app"
            id="check-button" onClick={() => this.check()}>
            Verificar
          </button>
          {guesses.map((g, i) => this.renderInput(g, i))}
        </div>
        <div className="app spacer" />
        {secret ? <Secret onClick={() => this.closeSecret()} /> : null}
      </div>
    )
  }
}