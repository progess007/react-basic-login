import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "..";
import { Footer } from "..";
import { Container, Col, Row } from "react-bootstrap";

export default function MenuThree () {
    return(
        <>
            <Menu />

            <Container className="p-3 my-3">
                <Row>
                    <Col className="col-12">
                        <img src="/rim1.jpg" alt="asdasd" style={{width: "100%"}} />
                        
                    </Col>
                    <Col className="col-12 my-3 text-center">
                        <h1>MenuThree</h1>
                    </Col>
                    <Col className="col-12">
                        <p>
                        4

We know React is SPA. Everything is rendered from the root component by expanding to appropriate HTML from JSX.

So it does not matter where you want to use the images. Best practice is to use an absolute path (with reference to public). Do not worry about relative paths.

In your case, this should work everywhere:
                        </p>
                    </Col>
                    <Col className="col-12 my-3">
                        <p>ส่วนผสนน้ำซุป</p>
                        <ul className="mt-3">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}