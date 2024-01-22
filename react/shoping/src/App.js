import './App.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import data from './data.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {

  let [womenMenu] = useState(['Sale', 'New in', 'Clothing', 'Dresses', 'Shoes', 'Face+Body']);
  let [menMenu] = useState(['Sale', 'New in', 'Clothing', 'BestSellers', 'Shoes', 'Sportswear']);

  let [shoes] = useState(data);
  // console.log(shoes, shoes[0].title);

  let navigate = useNavigate();

  function Card(props){
    return(
      <div className="col-md-4" key={props.i}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%" alt={`Shoe ${props.i+1}`} />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </div>
    );
  }

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>React-Shoping</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>

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

              <Nav.Link href="/detail">CUSTOMER SERVICE</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/event')}}>EVENT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {shoes.map(function(a,i){
                  return(
                    <Card shoes={shoes[i]} i={i}></Card>
                  )
                })}
              </div>
            </div>
          </>
         } />
        <Route path='/Detail' element={<Detail/>} />
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />  
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />  
        </Route>
      </Routes>

    </div>  
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
