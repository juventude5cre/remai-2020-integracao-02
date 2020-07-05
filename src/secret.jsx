import React, { Component } from 'react'
import './secret.css'

export class Secret extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    const { onClick } = this.props
    return (
      <div className="secret overlay">
        <div className="secret spacer" />
        <div className="secret container">
          <div className="secret spacer" />
          <div className="secret pane" onClick={onClick}>
            <div className="secret" id="image"></div>
            <p className="secret" id="warning">(Clique na imagem para fechar)</p>
          </div>
          <div className="secret spacer" />
        </div>
        <div className="secret spacer" />
      </div>
    )
  }
}