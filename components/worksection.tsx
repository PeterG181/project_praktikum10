'use client'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function WorkSection() {
    const works = [
        { img: "/images/y2kfashion.jpeg", title: "The Midnight Blazer", category: "Formal Wear" },
        { img: "/images/badgirl.jpeg", title: "Urban Street Set", category: "Street Style" },
        { img: "/images/oldschool.jpeg", title: "Silk Evening Gown", category: "Luxury Edition" },
    ];

    return (
        <section id="work" className="py-5">
            <Container>
                <div className="text-center mb-5 text-white">
                    <h2 className="section-title text-white">Trending Now</h2>
                    <p>Our best-selling pieces of the season.</p>
                </div>
                <Row>
                    {works.map((work, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="custom-card h-100">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={work.img} 
                                        style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
                                    />
                                </div>
                                <Card.Body>
                                    <div className="badge bg-info mb-2">{work.category}</div>
                                    <Card.Title className="fw-bold">{work.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        A wonderful project showcasing modern aesthetics and functionality.
                                    </Card.Text>
                                    <Button variant="outline-dark" size="sm">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default WorkSection;