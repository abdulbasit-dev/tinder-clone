import React from 'react'
import Header from './components/Header'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TinderCards from './components/TinderCards'

function App() {
  return (
    <div className='app'>
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>
            <h1> you are in chat page</h1>
          </Route>
          <Route exact path='/'>
            <TinderCards />
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
