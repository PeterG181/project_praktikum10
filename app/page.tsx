"use client";
import React from "react";
import Image from "next/image";

// Components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

// Bootstrap
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

 
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
              <h2>About Us</h2>
              <h6>What We Do?</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda, necessitatibus veniam vitae deleniti, quos nulla obcaecati eligendi nihil hic cum ex. Dolor ab eum dolore earum magni aut quis.
              </p>
              <Button variant="info">Learn More</Button>
            </Col>
            <Col md={6}>
              <p>
                <Image src="/images/about.jpg" alt="About Us" width={500}
                height={500}></Image>
              </p>
            </Col>
          </Row>
        </Container>
        <section className="bg-dark">
          <WorkSection></WorkSection>
        </section>
        <ServiceSection></ServiceSection>
        <section id="contact">
          <ContactSection></ContactSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}