"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
    return (
        <Container className='my-5 py-5'>
            <Row className='my-3 py-5'>
                <Col md={12} className="mb-3">
                    <Card className="text-center p-4">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <Form className="mt-3 p-4 text-start">
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required></Form.Control>
                            </Form.Group>    
                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={15} placeholder="Enter your message" required></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> 
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactSection;