'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function WorkSection() {
    return (
        <Container >
            <Row className='mb-3'>
                <Col md={12} className="text-center">
                    <h2>What We Work</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis?</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/image-44.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Rice with wild boar liver and cutted chese form texas
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/image-45.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Rice with wild boar liver and cutted chese form texas
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/image-46.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Rice with wild boar liver and cutted chese form texas
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkSection;