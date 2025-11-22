"use client"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        // PERBAIKAN UTAMA: Menambahkan style backgroundColor agar sesuai tema gelap
        <footer id="footer" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }} className="pt-5 pb-4 mt-5">
            <Container>
                <Row className="gy-4"> {/* gy-4 memberikan jarak antar baris saat mode mobile */}
                    
                    {/* Column 1: Collections (Dulu Products) */}
                    <Col md={3}>
                        <h5 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Collections</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">New Arrivals</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Best Sellers</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Accessories</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Sale</a></li>
                        </ul>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col md={3}>
                        <h5 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Explore</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/" className="text-white-50 text-decoration-none hover-text-gold">Home</a></li>
                            <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none hover-text-gold">Our Story</a></li>
                            <li className="mb-2"><a href="#service" className="text-white-50 text-decoration-none hover-text-gold">Services</a></li>
                            <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none hover-text-gold">Contact</a></li>
                        </ul>
                    </Col>

                    {/* Column 3: Legal / Terms */}
                    <Col md={3}>
                        <h5 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Legal</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Refund Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none hover-text-gold">Terms of Service</a></li>
                        </ul>
                    </Col>

                    {/* Column 4: Search + Social */}
                    <Col md={3}>
                        <h5 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Search</h5>
                        <Form className="mb-4">
                            <InputGroup>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Find products..." 
                                    className="rounded-0 bg-transparent text-white border-secondary" 
                                    style={{ fontSize: '0.9rem' }}
                                />
                                {/* Tombol diganti variant light agar kontras dengan background gelap */}
                                <Button variant="light" className="rounded-0 fw-bold">GO</Button>
                            </InputGroup>
                        </Form>
                        
                        <h5 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '1px' }}>Follow Us</h5>
                        <ul className="list-unstyled d-flex gap-3">
                            <li><a href="#" className="text-white"><i className="bi bi-facebook fs-5"></i></a></li>
                            <li><a href="#" className="text-white"><i className="bi bi-twitter-x fs-5"></i></a></li>
                            <li><a href="#" className="text-white"><i className="bi bi-instagram fs-5"></i></a></li>
                            <li><a href="#" className="text-white"><i className="bi bi-pinterest fs-5"></i></a></li>
                        </ul>
                    </Col>
                </Row>

                {/* Copyright Section */}
                <Row className="mt-5 pt-3 border-top border-secondary">
                    <Col md={12} className="text-center">
                        <p className="mb-0 text-white-50 small">
                            &copy; {new Date().getFullYear()} Aura Fashion Mode. All rights reserved. 
                            <span className="d-block d-md-inline ms-md-2">Designed by Mika Valentino.</span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>   
    )
}