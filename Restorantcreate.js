import React, { Component } from 'react'
import Restonav from './Restonav'

class Restorantcreate extends Component {
  constructor() {
    super();
    this.state = {
      name:null,
      email:null,
      rating:null,
      address:null
    };
  }
  create()
  {
    fetch('http://localhost:3000/restorant',{
      method:"post",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been added")
      })
    })
  }
  render() {
    return (
      <div class="createstyle">
      <Restonav/>
          <h1 style={{color:"white"}}>Add Restaurant</h1>
          <div>
            <input onChange={(event)=>{this.setState({name: event.target.value})}}
            placeholder="Restaurant Name"></input> <br/><br/>
            <input onChange={(event)=>{this.setState({email: event.target.value})}}
            placeholder="Restaurant Mail"></input><br/><br/>
            <input onChange={(event)=>{this.setState({rating: event.target.value})}}
            placeholder="Restaurant Rating"></input><br/><br/>
            <input onChange={(event)=>{this.setState({address: event.target.value})}}
            placeholder="Restaurant Address"></input><br/><br/>
            <button onClick={()=>{this.create()}}>Add Restaurant</button>
          </div>
      </div>
    );
  }
}
export default Restorantcreate
