import React from 'react'
import Item from '../components/Item/Item'
import firstImage from '../pictures/sci-building-70.jpeg'
import secondImage from '../pictures/codeie.png'
import thirdImage from '../pictures/netscout.png'


export default function Experience(){
  return (
    <span>
      <div >
        <Item name={"Undergraduate Research Assistant"} place={"Rutgers School of Communication and Information"} picture={firstImage} description={"I worked alongside a Rutgers professor, using web scraping techniques and APIs to gather information and images for analysis"}/>
        <Item name={"Coding Instructor"} place={"Codeie"} picture={secondImage} description={"I taught computer science skills to several students, including knowledge on data structures and boolean algebra, as well as programming in Scratch and JavaScript"}/>
        <Item name={"Research and Development Intern"} place={"Netscout"} picture={thirdImage} description={"I worked on developing my frontend kills by designing and customizing a support page using JavaScript, HTML, and CSS. Then I learned about connecting to the backend by writing code to retrieve important information from files."}/>
      </div>
      </span>
  )
}
