import React from 'react'

class Item extends React.Component{




    render(){
        return(
        <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.place}{this.props.picture}</h3>
        <p>{this.props.description}</p>
        </div>
        )

    }
}

export default Item


