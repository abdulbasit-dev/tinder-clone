import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import './ChatScreen.css'

function ChatScreen() {
  const {person} = useParams()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: person,
      image: 'https://i.pinimg.com/originals/d2/ee/cc/d2eecc07d66694333eb28e4287e9a3de.jpg',
      message: 'hi, how are u?',
    },
    {
      name: person,
      image: 'https://i.pinimg.com/originals/d2/ee/cc/d2eecc07d66694333eb28e4287e9a3de.jpg',
      message: 'how its going 😉',
    },
    {
      message: 'hows its gping 😘?',
    },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    setMessages([...messages, {message: input}])
    setInput('')
  }

  return (
    <div className='chatscreen'>
      <p className='chatScreen__timestamp'>YOU MATCH WITH {person} ON 10/08/2020</p>
      {messages.map(message =>
        message.name ? (
          <div className='chatScreen__message' key={message.name}>
            <Avatar src={message.image} className='chatScreen__image' alt={message.name} />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message' key={message.name}>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen__form' onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='Type a message...'
        />
        <button className='chatScreen__inputButton' type='submit'>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatScreen
