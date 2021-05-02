import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" style={{ marginBottom: 40 }}>
            <Navbar.Brand href="/">My Posts</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
        </Navbar>
    );
};

export default Header;