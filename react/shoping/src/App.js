import './App.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import data from './data.js';

function App() {

  let [womenMenu] = useState(['Sale', 'New in', 'Clothing', 'Dresses', 'Shoes', 'Face+Body']);
  let [menMenu] = useState(['Sale', 'New in', 'Clothing', 'BestSellers', 'Shoes', 'Sportswear']);

  let [shoes] = useState(data);
  // console.log(shoes, shoes[0].title);

  return (
    <div className="App">
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
      
      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {shoes.map(function(a,i){
            return(
              <div className="col-md-4" key={i}>
                <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt={`Shoe ${i+1}`} />
                <h4>{shoes[i].title}</h4>
                <p>{shoes[i].price}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
