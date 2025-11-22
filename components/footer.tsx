"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className="pt-md-5 pd-md-2 py-3 bg-light">
            <Container>
                <Row>
                    {/* Our Products */}
                    <Col md={3}>
                        <h3>Our Products</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Account</a></li>
                            <li className="mb-2"><a href="#">Bundle</a></li>
                            <li className="mb-2"><a href="#">Blog</a></li>
                            <li className="mb-2"><a href="#">Contact</a></li>
                            <li className="mb-2"><a href="#">Circular</a></li>
                        </ul>
                    </Col>
                    {/* Quick Link */}
                    <Col md={3}>
                        <h3>Quick Link</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Home</a></li>
                            <li className="mb-2"><a href="#">About Us</a></li>
                            <li className="mb-2"><a href="#">Service</a></li>
                            <li className="mb-2"><a href="#">Work</a></li>
                            <li className="mb-2"><a href="#">Products</a></li>
                        </ul>
                    </Col>
                    {/* Terms */}
                    <Col md={3}>
                        <h3>Terms</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Refund Policy</a></li>
                            <li className="mb-2"><a href="#">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#">License</a></li>
                        </ul>
                    </Col>
                {/* Search + Social */}
                <Col md={3}>
                    <h3>Search Here</h3>
                    <Form className="mb3">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Search Here" />
                            <Button variant="Info">Search</Button>
                        </InputGroup>
                    </Form>
                    <h3>Follow Us</h3>
                    <ul className="list-unstyled d-flex gap-3">
                        <li><a href="#"><i className="bi bi-facebook fs-4"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter fs-4"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram fs-4"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube fs-4"></i></a></li>
                        <li><a href="#"><i className="bi bi-pinterest fs-4"></i></a></li>
                    </ul>
                </Col>
                {/* Copyright */}
                <Row className="mt-3">
                    <Col md={12} className="text-center">
                        <hr></hr>
                        <p className="mb-0">All rights reserved by @ Mika Valentino</p>
                    </Col>
                </Row>
              </Row>
            </Container>
        </footer>   

    )
}