import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./creater.css";
import { Menu } from "../index";
import { Footer } from '../index';
import { Button, Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';

function toThaiDateString(date) {
    let monthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม.",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
  
    let year = date.getFullYear() + 543;
    let month = monthNames[date.getMonth()];
    let numOfDay = date.getDate();
  
    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let second = date.getSeconds().toString().padStart(2, "0");
  
    return `${numOfDay} ${month} ${year} ${hour}:${minutes}:${second} น.`;
}

function MyDateTime() {
    let date1 = new Date();
    date1 = toThaiDateString(date1);
    return <div style={{ margin: "40px" }}>{date1}</div>;
}

function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="Adobe Illustrator" color="#F9E5F6" />
        <Skill skill="Adobe Photoshop" color="#D549D4" />
        <Skill skill="Adobe AfterEffect" color="#EBBBE3" />
        <Skill skill="Adobe Premiere pro" color="#9A6CE1" />
      </div>
    );
}

function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color }}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
}

function Intro() {
    return (
      <div>
        <h1>พริสา นภากร</h1>
        <p> นักศึกษาปริญญาโท สาขาเทคโนโลยีสารสนเทศ </p>
        <p> และการสื่อสาร คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี </p>
        <p> ชื่นชอบในการนอน ขอบคุณค่ะ</p>
        <p>
          <h3> warning : อย่าให้เขียนโค้ด </h3>
        </p>
      </div>
    );
}
  
function Avatar() {
    return <img className="avatar" src="risa.png" alt="P A R I S A" />;
}

export default function Creater() {
    return (
        <>
            <Menu />
            <Container className="my-3 p-3">
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <div className="card">
                            <Avatar />
                            <div className="data">
                            <Intro />
                            <SkillList />
                            </div>
                        </div>
                        <MyDateTime />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}