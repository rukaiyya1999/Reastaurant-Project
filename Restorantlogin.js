import React, { Component } from 'react'
import Restonav from './Restonav'

class Restorantlogin extends Component {
  constructor() {
    super();
    this.state = {
      name:"",
      pass:""
    };
  }
  login(){
    console.warn(this.state);
    fetch('http://localhost:3000/login?q='+this.state.name).then((data)=>{
      data.json().then((resp)=>{
        console.warn('resp',resp);
        if(resp.length>0){
          localStorage.setItem('login',JSON.stringify(resp))
          console.warn(this.props.history.push('list'));
        }
        else{
          alert("Please check Username And Password")
        }
      })
    })
  }
  render() {
    return (
      <div class= 'container-fluid'>
      <Restonav/>
      <div class="loginpage">
      <br/><input type='text' placeholder="Enter Username" name="user" onChange={(event)=>this.setState({name:event.target.value})}></input><br/><br/>
      <input type='password' placeholder="Enter Password" name="user" onChange={(event)=>this.setState({pass:event.target.value})}></input><br/><br/>
      <button onClick={()=>{this.login()}}>Login</button>
      </div>
      </div>
    );
  }
}
export default Restorantlogin
