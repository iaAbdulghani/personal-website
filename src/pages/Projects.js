import React from 'react'
import Item from '../components/Item/Item'
import firstImage from '../pictures/LetMeGuess.png'
import secondImage from '../pictures/mow.png'
import thirdImage from '../pictures/bot.png'
import fourthImage from '../pictures/genshin.png'
import fifthImage from '../pictures/cca.png'

export default function Projects() {
  return (
    <span>
      <div >
        <Item name={"Let Me Guess"} place={<a href="https://github.com/iaAbdulghani/Akinator-Clone">Github</a>} picture={firstImage} description={"My first project. Using Java, I stored lots of different characters in a data structure and assigned different attributes to them. Then I created a UI using Java Swing that asked the user randomized yes/no questions to narrow the characters down to one."}/>
        <Item name={"Meals on Wheel Volunteer Application"} place={<a href="https://gregarious-dolphin-16199a.netlify.app/">Netifly</a>} picture={secondImage} description={"Using Node and Express, worked as a backend developer at Hack4Impact to write routes to a PostgreSQL database."}/>
        <Item name={"Discord Bot"} place={<a href="https://github.com/iaAbdulghani/NotifyBot">Github</a>} picture={thirdImage} description={"Used Python to create a discord bot hosted on AWS for a year. Performed duties such as assigning roles to server members and trivial tasks I added for my own amusement."}/>
        <Item name={"Genshin Teams"} place={<a href="https://github.com/iaAbdulghani/GenshinTeams">Github</a>} picture={fourthImage} description={"A full stack project I made using React for the frontend, and writing routes to a MongoDB database on the backend. I could use this to keep track of my characters in a game."}/>
        <Item name={"Combined Community Action"} place={<a href="https://cca-frontend.vercel.app/">Vercel</a>} picture={fifthImage} description={"Another project made as a developer at Hack4Impact."}/>
        
        
        
      </div>
      </span>
  )
}
