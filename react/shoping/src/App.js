import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function YourComponent() {
  let [womenMenu, setWomenMenu] = useState(['Sale', 'New in', 'Clothing', 'Dresses', 'Shoes', 'Face+Body']);
  let [menMenu, setMenMenu] = useState(['Sale', 'New in', 'Clothing', 'BestSellers', 'Shoes', 'Sportswear']);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Shoping</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="WOMEN" id="basic-nav-dropdown">
              {womenMenu.map(function (a, i) {
                return (
                  <NavDropdown.Item key={i} href={`#action/3.${i}`}>
                    {a}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="MEN" id="basic-nav-dropdown">
              {menMenu.map(function (a, i) {
                return (
                  <NavDropdown.Item key={i} href={`#action/3.${i}`}>
                    {a}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">CUSTOMER SERVICE</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default YourComponent;
