import React, {useState, useEffect} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import {db} from '../firebase'

function TinderCards() {
  const [people, setPeople] = useState([])

  //a pecie of code run based on a con dition
  useEffect(() => {
    const unsubscribe = db
      .collection('people')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => {
        setPeople(snapshot.docs.map(doc => doc.data()))
      })

    // clean up function
    return () => {
      return unsubscribe()
    }
  }, [])

  //make the first lettr of each person capital
  function capitalizeFirstLetter(string) {
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  console.log('component render')

  return (
    <div>
      <div className='tinderCards__cardContainer'>
        {people.map((person, index) => (
          <TinderCard className='swipe' preventSwipe={['up', 'down']} key={index}>
            <div className='card' style={{backgroundImage: `url(${person.url})`}}>
              <h3>{capitalizeFirstLetter(person.name)}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
