import React from 'react'
import Header from './components/Header'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'
import Home from './components/Home'
import Chats from './components/Chats'
import ChatScreen from './components/ChatScreen'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/chats/:person'>
            <Header backButton='/chats' />
            <ChatScreen />
          </Route>
          <Route path='/chats'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <h1> 404 not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
