import React from 'react'
import Header from './Header'
import TinderCards from './TinderCards'
import './Home.css'
import SwipeButtons from './SwipeButtons'

function Home() {
  return (
    <div className='home'>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  )
}

export default Home
