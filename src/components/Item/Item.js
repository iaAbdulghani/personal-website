import React from 'react'
import './Item.css'



class Item extends React.Component{




    render(){
        return(
        <div class="ItemHolder">
        <h2>{this.props.name}</h2>
        <h3>{this.props.place}</h3>
        <img src = {this.props.picture}alt="Image"></img>
        <p>{this.props.description}</p>
        </div>
        )

    }
}

export default Item


