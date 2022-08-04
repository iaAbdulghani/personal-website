import React from 'react'
import Item from '../components/Item/Item'
import firstImage from '../pictures/LetMeGuess.png'

export default function Projects() {
  return (
    <span>
      <div >
        <Item name={"Let Me Guess"} place={<a href="https://github.com/iaAbdulghani/Akinator-Clone">Github</a>} picture={firstImage} description={"My first project. Using Java, I stored lots of different characters in a data structure and assigned different attributes to them. Then I created a UI using Java Swing that asked the user randomized yes/no questions to narrow the characters down to one."}/>
        
        
      </div>
      </span>
  )
}
