import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
    constructor(props) {
      super(props)

    this.state = {
      message: 'Quando o Angular enviar uma mensagem, devemos vê a confirmação aqui 😎'
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentDidUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    this.setState({
      message: message.text
    })
  }

  sendMessage() {
    e.emit('message', { text: 'Hello from React 👋' })
  }

  render() {
    return (
      <div style={{marginTop: '10px'}}>
        <h1>Esse projeto foi escrito em React</h1>

        <p> 
          <button onClick={this.sendMessage}>
            Enviar uma mensagem para o Angular
          </button>
        </p>

        <p>
          {this.state.message}
        </p>
      </div>
    )
  }
}