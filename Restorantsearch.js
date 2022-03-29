import React, { Component } from 'react'
import Restonav from './Restonav'

import {Table, Form, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import{
Link
} from 'react-router-dom'
class Restorantsearch extends Component {
  constructor() {
    super();
    this.state = {
      searchdata:null,
      nodata:false,
      lastsearch:""
    };
  }
  search(key){
    console.warn(key);
    this.setState({lastsearch:key})
    fetch('http://localhost:3000/restorant?q='+key).then((data)=>{
      data.json().then((resp)=>{
        console.warn('resp',resp);
        if(resp.length>0)
        {
          this.setState({searchdata:resp,nodata:false})
        }
        else{
            this.setState({nodata:true,searchdata:null})
        }

      })
    })
  }
  delete(id){
    fetch("http://localhost:3000/restorant/"+id,{
      method:"DELETE",

    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant has been Deleted")
        this.search(this.state.lastsearch)
      })
    })
  }
  render() {
    return (
      <Container class='searchstyle'>
      <Restonav/>
      <h1> Search For Restaurant </h1>
      <Form.Control type="text" onChange={(event)=>this.search(event.target.value)} placeholder="search restorant" />
      <div>
      {
        this.state.searchdata?
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
          this.state.searchdata.map((item)=>
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
        :''
      }
      {
        this.state.nodata?<h3>No data Found</h3>:null
      }
      </div>
      </Container>
    );
  }
}
export default Restorantsearch
