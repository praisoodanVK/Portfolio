import React from 'react'
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter ,Route,Routes,Link} from "react-router-dom";
import Homepage from "./HomePage";
import About from './About.jsx';
import Projects from './Projects';
import Contact from './Contact';



const NavBar = () => {
  return (
    <BrowserRouter>
    <Container fluid>  
    <Navbar expand="lg" >
    <Container fluid>
      <Navbar.Brand href="#home"><span className='Name'>Praisoodan K</span> <span className='Ptf'> Portfolio</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
      
      <Nav>
          <Nav.Link as={ Link } to= "/" >Home</Nav.Link>
          <Nav.Link as={ Link } to= "/about" >About </Nav.Link>
          <Nav.Link as={ Link } to= "/projects" >Projects</Nav.Link>
          <Nav.Link as={ Link } to= "/contact" >Contact</Nav.Link>
        </Nav>
         </Navbar.Collapse>
    </Container>
  </Navbar>
    </Container>
    <Routes>
        <Route path='/' element={<Homepage/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/projects' element={<Projects/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
    </BrowserRouter>  
  )
}

export default NavBar
