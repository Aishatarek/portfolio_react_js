import React from "react";
import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function NavBar() {
    return (
        <>
            <>
                {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">Link</Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
            {/* <Navbar bg="dark" expand="lg" collapseOnSelect >
                <NavLink to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navlinks justify-content-end">
                        <HashLink to="/#latest" id="dd" className="nav-item">Latest Builds</HashLink>
                        <HashLink to="/#process" className="nav-item">Process</HashLink>
                        <HashLink to="/#service" className="nav-item">Services</HashLink>
                        <HashLink to="/#contact">Contact Us</HashLink>
                        <NavLink to="/Projects">Projects</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar > */}
            {/* end navbar  */}
        </>
    )
}

export default NavBar