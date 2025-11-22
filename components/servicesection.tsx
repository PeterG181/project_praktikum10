"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from "next/image";

function ServiceSection() {
    const services = [
        { icon: "/images/Lee Zin.jpeg", title: "Premium Materials", desc: "We source only the finest silk, cotton, and wool for tailored comfort." },
        { icon: "/images/slamdunk.jpeg", title: "Perfect Fit Guarantee", desc: "Our sizes are designed to flatter every silhouette seamlessly." },
        { icon: "/images/sigma.jpg", title: "Eco-Conscious", desc: "100% sustainable packaging and ethically sourced fabrics." },
    ];

    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title">Our Services</h2>
                    <p className="text-muted">We provide high quality digital solutions</p>
                </div>
                <Row>
                    {services.map((service, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card className="custom-card h-100 text-center p-4 border-0">
                                <div className="d-flex justify-content-center mb-3">
                                    <Image src={service.icon} alt={service.title} width={80} height={80} objectFit="contain" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {service.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default ServiceSection;