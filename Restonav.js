import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash, faList, faHome, faSearch, faPlusSquare,faUser, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import {Navbar,Nav,Container,NavLink} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class Restonav extends Component {
  render() {
    return (
      <div class= 'navstyle'>
      <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="#home" style={{color:"green"}}><h1>RESTAURANT</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link style={{textDecoration:"none"}} to='/'><FontAwesomeIcon icon={faHome}/>Home</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link><Link style={{textDecoration:"none"}} to='/list'><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link><Link style={{textDecoration:"none"}} to='/search'><FontAwesomeIcon icon={faSearch}/>search</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link><Link style={{textDecoration:"none"}} to='/Create'><FontAwesomeIcon icon={faPlusSquare}/>create</Link></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {
          localStorage.getItem('login')?
          <Nav.Link><Link style={{textDecoration:"none"}} to='/logout'><FontAwesomeIcon icon={faUser}/>logout</Link></Nav.Link>
          :
          <Nav.Link><Link style={{textDecoration:"none"}} to='/login'><FontAwesomeIcon icon={faUser}/>Login</Link></Nav.Link>
      }
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
    );
  }
}

export default Restonav
