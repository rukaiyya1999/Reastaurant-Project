import React, { Component } from 'react'
import Restonav from './Restonav'

class Restorantupdate extends Component {
 constructor() {
   super();
   this.state = {
     name:null,
     email:null,
     rating:null,
     address:null
   };
 }

  componentDidMount(){
    fetch('http://localhost:3000/restorant/'+this.props.match.params.id).then((responce)=>{
      responce.json().then((result)=>{
        console.warn(result)
        this.setState({
          name:result.name,
          email:result.email,
          id:result.id,
          rating:result.rating,
          address:result.address
        })
      })
    })
  }

  update(){
    fetch('http://localhost:3000/restorant/'+this.state.id,{
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been Updated")
      })
    })
  }
  render() {
  return (
      <div>
      <Restonav/>
      <h1> This is update </h1>
      <div>
        <input onChange={(event)=>{this.setState({name: event.target.value})}}
        placeholder="Restaurant Name" value={this.state.name}></input> <br/><br/>
        <input onChange={(event)=>{this.setState({email: event.target.value})}}
        placeholder="Restaurant Mail"value={this.state.email}></input><br/><br/>
        <input onChange={(event)=>{this.setState({rating: event.target.value})}}
        placeholder="Restaurant Rating"value={this.state.rating}></input><br/><br/>
        <input onChange={(event)=>{this.setState({address: event.target.value})}}
        placeholder="Restaurant Address"value={this.state.address}></input><br/><br/>
        <button onClick={()=>{this.update()}}>Update Restaurant</button>
      </div>
        </div>
    );
  }
}
export default Restorantupdate
