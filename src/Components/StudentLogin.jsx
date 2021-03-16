import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

class StudentLogin extends Component {
    constructor(){
      super()
      this.state = {
        fullName: '',
        email: '',
        password:''
      }
      this.changeFullName = this.changeFullName.bind(this)
      this.changeEmail = this.changeEmail.bind(this)
      this.changePassword = this.changePassword.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }
    changeFullName(event){
      this.setState({
        fullName:event.target.value
      })
    }
    changeEmail(event){
      this.setState({
        email:event.target.value
      })
    }
    changePassword(event){
      this.setState({
        password:event.target.value
      })
    }
    onSubmit(event){
      event.preventDefault()
      const registered = {
        fullName: this.state.fullName,
        email: this.state.email,
        password: this.state.password
      }
      axios.post('http://localhost:4000/app/studentlogin', registered)
      .then(response => console.log(response))
  
      this.setState({
        fullName: '',
        email: '',
        password:''
      })
    }
    render() {
      return (
        <div>
          <div className="container">
            <div className="form-div">
              <form onSubmit={this.onSubmit}>
                <input type='text'
                 placeholder='Enter full name' 
                 onChange={this.changeFullName} 
                 value={this.state.fullName} 
                 className="form-control form-group">
                 </input>
                 <input type='text'
                 placeholder='Enter email' 
                 onChange={this.changeEmail} 
                 value={this.state.email} 
                 className="form-control form-group">
                 </input>
                 <input type='password'
                 placeholder='Enter password' 
                 onChange={this.changePassword} 
                 value={this.state.password} 
                 className="form-control form-group">
                 </input>
                 <input type="submit" className="btn btn-primary btn-block" value="submit"></input>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
  
export default StudentLogin;
  