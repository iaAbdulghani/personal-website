import { render } from '@testing-library/react';
import React from 'react'
import './Form.css'
class Form extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          name: '',
          email: '',
          message: '',
          disabled: false,
          emailSent: null,
      }
  }
  
  handleSubmit =(event)=>{
      event.preventDefault()
    console.log('Yo')
    }

  render(){
      return(
        <form className="Items" onSubmit={this.handleSubmit}>
           <div> <input type="text" placeholder="First Name"  onChange={this.handleChange}/></div>
            <div><input type="text" placeholder="Last Name"  onChange={this.handleChange} /></div>
            <div><input type="email" placeholder="Email"  onChange={this.handleChange} /></div>
           <div> <input type="text" placeholder="Message"  onChange={this.handleChange} /></div>
            <div><input type="submit"/></div>
        </form>
      )
  }

}

export default Form