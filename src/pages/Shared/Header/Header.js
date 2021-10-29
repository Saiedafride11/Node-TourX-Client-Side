import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="header-container">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><img src="https://i.ibb.co/L00Wd3h/logo.png" className="w-100" alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/tours">Tours</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {/* {   
                                user?.displayName ? 
                                <Button onClick={logOut} variant="light" style={{color: '#1976d2'}}>LogOut</Button> 
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }&nbsp;&nbsp; */}
                            <Navbar.Text>
                                {/* {   
                                    user?.displayName ? 
                                    ' Hello : '
                                    :
                                    ''
                                }
                                <span className="text-white">{user?.displayName}</span> */}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;