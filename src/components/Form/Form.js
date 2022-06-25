import { render } from '@testing-library/react';
import React from 'react'
import './Form.css'
import axios from 'axios'
class Form extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          fName: '',
          lName: '',
          email: '',
          message: '',
          disabled: false,
          
      }
  }
  
  handleSubmit =(event)=>{
      event.preventDefault()

      this.setState({
          disabled: true,
      })
      axios.post('/api/email', this.state)
      .then(res=>{
          if(res.data.success){
            this.setState({
                disabled: false,
                
            })
          }else{
            this.setState({
                disabled: false,
                
            })
          }
        })
        .catch(err=>{
            this.setState({
                disabled: false,
               
            })
        })
      
    }
    handleChange = (event)=>{
        const target = event.target
        const id = target.id

        this.setState({
            [id]: target.value
        })
        
    }

  render(){
      return(
          
        <form className="items" onSubmit={this.handleSubmit}>
            <p>If you want to reach out to me, fill out this form, and I will get back to you as soon as possible.</p>
           <div> <input type="text" id="fName" placeholder="First Name"  onChange={this.handleChange}/></div>
            <div><input type="text" id="lName" placeholder="Last Name"  onChange={this.handleChange} /></div>
            <div><input type="email" id="email" placeholder="Email"  onChange={this.handleChange} /></div>
           <div> <textarea id="message" placeholder="Message"  onChange={this.handleChange} /></div>
            <div><input type="submit"/></div>
            
        </form>
      )
  }

}

export default Form