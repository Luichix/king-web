import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const botName = 'Elina Bot'

const config = {
  initialMessages: [createChatBotMessage(`Holaaa! Soy ${botName}. En que puedo servirle?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#9e0c7e'
    },
    chatButton: {
      backgroundColor: '#9e0c7e'
    }
  },
  customComponents: {
    header: () => <div style={{
      backgroundColor: '#eee7e7',
      padding: '0.5em',
      borderRadius: '3px',
      fontWeight: '500',
    }}>Chat con Elina Bot</div>
  }
}

export default config