import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useParams } from 'react-router';

export default function BreedsNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/home">Dog Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#/breeds">Breeds</Nav.Link>
                    {/* {userClick && breedId ? <Nav.Link href="#/breeds/:id">Breed Info</Nav.Link> : null} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>    
    )
}
