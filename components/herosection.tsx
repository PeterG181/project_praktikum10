"use client"
import Carousel from 'react-bootstrap/Carousel';

const HeroSection = () => {
    const slides = [
        {
            title: "Redefine Your Style",
            subtitle: "Elegance is not standing out, but being remembered.",
            imageUrl: "/images/Lee Zin.jpeg", 
        },
        {
            title: "Autumn Collection '24",
            subtitle: "Discover the warmth of our premium knitwear series.",
            imageUrl: "/images/slamdunk.jpeg",
        },
        {
            title: "Sustainable Luxury",
            subtitle: "Crafted with care for you and the planet.",
            imageUrl: "/images/sigma2.jpg",
        },
    ]

    return (
        <Carousel fade interval={3000} controls={false}>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div style={{ position: 'relative', height: '100vh' }}>
                        <div className="hero-overlay"></div>
                        <div 
                            style={{
                                backgroundImage:`url(${slide.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                            }}>
                        </div>
                        <Carousel.Caption className="pb-5 mb-5">
                            <h1 className="display-3 fw-bolder text-uppercase drop-shadow">{slide.title}</h1>
                            <p className="lead fs-3">{slide.subtitle}</p>
                            <button className="btn btn-primary btn-lg mt-3 rounded-0 px-5">View Our Work</button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default HeroSection;