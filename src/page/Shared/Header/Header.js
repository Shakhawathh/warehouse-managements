import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  
  const handleSignOut = () =>{
    signOut(auth);
}

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  sticky="top" >
        <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to ="/Blog">Blog</Nav.Link>
            {
              user &&  <>
              
              <Nav.Link as={Link} to ="/AddItem">AddItem</Nav.Link>
              <Nav.Link as={Link} to ="/ManageItems">ManageItems</Nav.Link>
              <Nav.Link as={Link} to ="/MyItems">MyItems</Nav.Link>
               </>
            }
            {
              user?
              <button  className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sing out</button>
              :
              <Nav.Link as={Link} to="Login">
              Login
            </Nav.Link>
            }
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;