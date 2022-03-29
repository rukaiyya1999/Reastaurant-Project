import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import Restonav from './Restonav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import{
Link
} from 'react-router-dom'
class Restorantlist extends Component {
constructor(props) {
  super(props);
  this.state = {
    list:null
  };
}
componentDidMount()
{
  this.getdata()
}
getdata(){
  fetch("http://localhost:3000/restorant").then((responce)=>{
    responce.json().then((result)=>{

      this.setState({list:result})
    })
  })
}

delete(id){
  fetch("http://localhost:3000/restorant/"+id,{
    method:"DELETE",

  }).then((result)=>{
    result.json().then((resp)=>{
      alert("Restaurant has been Deleted")
      this.getdata()
    })
  })
}
  render() {

    return (
      <div class= 'liststyle'>
      <Restonav/>
      <h1> List Of Restorants </h1>
      {
      this.state.list?
      <div>
      <Table striped bordered hover>
      <thead>
    <tr>
      <th>ID</th>
      <th> Name</th>
      <th> Address</th>
      <th>Rating</th>
      <th>Operation</th>
    </tr>
  </thead>
  <tbody>
  {
      this.state.list.map((item,i)=>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.rating}</td>
        <td>  <Link to={'/update/'+item.id}><FontAwesomeIcon icon={faEdit}/></Link>
         <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
      </tr>
  )
    }
  </tbody>
      </Table>
      </div>
      :<p>please wait</p>
      }
    </div>
    );
  }
}
export default Restorantlist
