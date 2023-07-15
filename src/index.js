import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {id: 0, name: "เสื้อยืด",price: 300, image: "tshirt.jpg"},
  {id: 1, name: "หมสก",price: 500, image: "hat.jpg"},
  {id: 2, name: "กางเกง",price: 600, image: "shorts.jpg"}
]

function Product(props) {
  return (
    <>
      <div>
        <img 
          src={props.image}
          className="img-fluid"
          alt={props.name} 
        />
      </div>
      <div>{props.name}</div>
      <div>{props.price} บาท</div>
    </>
  );
}

function App() {

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Container className="p-3 my-3">
      <Row className='border'>
        <Col className='text-center'>
          <Product 
            name={products[0].name}
            price={products[0].price}
            image={products[0].image}
          />
          <Button style={{margin: "5px 0px"}} 
            onClick={()=> {
              setTotalItems(totalItems+1)
              setTotalPrice(totalPrice+products[0].price)
            }}>เพิ่มลงตะกร้า</Button>
        </Col>
        <Col className='text-center'>
          <Product 
            name={products[1].name}
            price={products[1].price}
            image={products[1].image}
          />
          <Button style={{margin: "5px 0px"}}
            onClick={()=>{
              setTotalItems(totalItems+1)
              setTotalPrice(totalPrice+products[1].price)
            }}
          >เพิ่มลงตะกร้า</Button>
        </Col>
        <Col className='text-center'>
          <Product 
            name={products[2].name}
            price={products[2].price}
            image={products[2].image}
          />
          <Button style={{margin: "5px 0px"}}
            onClick={()=>{
              setTotalItems(totalItems+1)
              setTotalPrice(totalPrice+products[2].price)
            }}
          >เพิ่มลงตะกร้า</Button>
        </Col>
      </Row>
      <Row className='border mt-3'>
        <Col className="text-center p-4">
          <h3 className=''>จำนวนสินค้าในตะกร้า {totalItems} ชิ้น</h3>
          <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
        </Col>
      </Row>
    </Container>
  );
}

/*
function App() {
  return (
    <Container className='p-3 my-3' style={{ backgroundColor: 'violet'}}>
      <h1>Hello World</h1>
      <Button style={{margin: "0px 3px"}}>Click Me</Button>
      <Button variant="success" style={{marginLeft: "10px"}}>Click Me</Button>
      <Button variant="danger" style={{marginLeft: "10px"}}>Click Me</Button>
      <img src="pexels-andy-vu-3244513r.jpg" className='img-fluid mt-5' alt="View" />
    </Container>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
