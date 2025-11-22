'use client'
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);

   
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            className={scrolled ? "navbar-custom py-2" : "bg-transparent py-3"}
            data-bs-theme={scrolled ? "light" : "dark"} // Ganti tema teks berdasarkan background
        >
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-4">
                    Aura< span className="text-primary">Fashion</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0 fw-medium">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#work">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Button variant="primary" className="ms-3 rounded-pill px-4">Get Started</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;