"use client";
import React from "react";
import Image from "next/image";

// Components
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

// Bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* About Section - Custom di Page ini */}
      <Container className="my-5 py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="position-relative">
                <Image 
                  src="/images/slamdunk.jpeg" 
                  alt="About Us" 
                  width={500} 
                  height={600} 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-primary text-white p-4 rounded position-absolute bottom-0 start-0 m-3" style={{maxWidth: '200px'}}>
                    <h3 className="fw-bold mb-0">10+</h3>
                    <small>Years Experience</small>
                </div>
            </div>
          </Col>
          <Col md={6}>
            <h6 className="text-primary text-uppercase fw-bold"> Our Philosophy</h6>
            <h2 className="display-5 fw-bold mb-4">Fashion That Speaks Before You Do</h2>
            <p className="text-muted lead">
              At Aura Mode, we believe style is a way to say who you are without having to speak. 
              Founded in 2024, we bridge the gap between high-end runway trends and everyday wearability.
            </p>
            <p className="text-muted mb-4">
              Every stitch tells a story of dedication, quality, and passion. Join us in our journey 
              to make the world a more stylish place, one outfit at a time.
            </p>
            <Button variant="primary" size="lg" className="rounded-pill px-4">Learn More About Us</Button>
          </Col>
        </Row>
      </Container>

      {/* Service Section */}
      <ServiceSection />

      {/* Work Section with Dark Background */}
      <div className="bg-dark text-white">
        <WorkSection />
      </div>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}