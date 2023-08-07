import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Button, Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import Creater from './pages/creater';
import MenuJapan from './pages/menujapan';
import MenuOne from './pages/menuone';
import MenuTwo from './pages/menutwo';
import MenuThree from './pages/menuthree';

const menu = [
  {id: 0, 
   name: "ข้าวหมูทอดทงคัตสึ",
   description: "xxx", 
   image: "https://www.w3schools.com/css/paris.jpg"
  },
  {id: 1, 
   name: "ราเมนหมูชาบู",
   description: "xxx",
   image: "https://www.w3schools.com/css/paris.jpg"
  },
  {id: 2,
   name: "ซูชิหน้าปลาแซวม่อน",
   description: "xxx",
   image: "https://www.w3schools.com/css/paris.jpg"
  }
]

function List(props) {
  return (
    <>
      <div className='mt-5'>        
        <img 
          src={props.image}
          className="image__round"
          alt={props.name}
        />
      </div>
      <div className='h3 mt-2'>{props.name}</div>
      <div className='h5'>{props.description}</div>
    </>
  );
}

function MyLink(props) {
  return (
    
    <NavLink
      className="text-change px-2"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline"
        }
      }}
    >
      {props.linkName}
    </NavLink>
  )
}

function MyLinkMenu(props) {
  return (
    <NavLink
      className="btn btn-secondary my-3"
      to={props.path}
    >
      {props.linkName}
    </NavLink>
  )
}

function MyLinkFooter(props) {
  return(
    <NavLink
      className="text-noline px-2"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline"
        }
      }}
    >
      {props.linkName}
    </NavLink>
  )
}

export function Menu() {
  return <>
    <Navbar bg="warning">
        
        <Navbar.Brand href="#home" className='ms-4'>
          <img
            alt="Sushi Image"
            src="https://www.w3schools.com/css/paris.jpg" //ใส่ path รูป
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Nav className="me-auto">
          <MyLink path="/" linkName="หน้าแรก"/>
          <MyLink path="/menulist" linkName="เมนูอาหารญี่ปุ่น"/>
          <MyLink path="/creater" linkName="ผู้จัดทำ"/>
        </Nav>
      
    </Navbar>
  </> 
}

function FoodList() {
  return (
    <>
      <Row>
        <Col className="text-center p-4">
          <h3 className='text--line'>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
        </Col>
      </Row>
      <Row>
        
        <Col className='text-center'>
          <List 
            name={menu[0].name}
            description={menu[0].description}
            image={menu[0].image}
          />

          <MyLinkMenu path="/menuone" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>

        <Col className='text-center'>
          <List 
            name={menu[1].name}
            description={menu[1].description}
            image={menu[1].image}
          />

          <MyLinkMenu path="/menutwo" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>

        <Col className='text-center'>
          <List
            name={menu[2].name}
            description={menu[2].description}
            image={menu[2].image}
          />

          <MyLinkMenu path="/menuthree" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>

      </Row>
    </>
  )
}

export function Footer() {
  return <>
    <footer class="footer mt-4">
        <div>
          <span>&copy; 2023 </span>
          <MyLinkFooter path="/creater" linkName="ผู้จัดทำ - Parisa" />
        </div>
        <div>
          <a className='text-noline' href="#">Back to top</a>
        </div>
    </footer>
  </>
}


// export function Menu() {
//   return (
//     <nav className='bg-secondary p-2 my-3 text-center'>
//       <MyLink path="/" linkName="home"/>
//       <MyLink path="/menulist" linkName="menulist" />
//       <MyLink path="/contract" linkName="creater" />
//     </nav>
//   )
// }

function Index() {
  return (
    <>
      <Menu />
        <Container className='p-3 my-3'>
          <FoodList />
        </Container>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/' element={<Index />} />
          <Route path='/menulist' element={<MenuJapan />}></Route>
          <Route path='/creater' element={<Creater />} />
          <Route path='/menuone' element={<MenuOne />} />
          <Route path='/menutwo' element={<MenuTwo />} />
          <Route path='/menuthree' element={<MenuThree />} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
