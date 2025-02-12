'use client'; // Mark as a Client Component

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';


const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const backgroundRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const textRef = useRef(null);

  // Image and text data for 6 slides
  const slides = [
    {
      full: '/hero1.jpg', // Full background image
      thumbnail: '/hero1.jpg', // Small thumbnail image
      title: 'High-Quality Steel Products',
      description: 'We provide the best steel products for industrial and construction needs.',
      cta: 'Explore Products',
    },
    {
      full: '/hero2.jpg',
      thumbnail: '/hero2.jpg',
      title: 'Innovative Steel Solutions',
      description: 'Cutting-edge technology for modern steel manufacturing.',
      cta: 'Learn More',
    },
    {
      full: '/hero3.jpg',
      thumbnail: '/hero3.jpg',
      title: 'Sustainable Steel Manufacturing',
      description: 'Eco-friendly processes for a greener future.',
      cta: 'Our Process',
    },
    {
      full: '/hero4.jpg',
      thumbnail: '/hero4.jpg',
      title: 'Custom Steel Fabrication',
      description: 'Tailored solutions for your unique requirements.',
      cta: 'Get a Quote',
    },
    {
      full: '/hero5.jpg',
      thumbnail: '/hero5.jpg',
      title: 'Global Steel Distribution',
      description: 'Delivering steel products worldwide.',
      cta: 'Contact Us',
    },
    {
      full: '/hero6.jpg',
      thumbnail: '/hero6.jpg',
      title: 'Steel for Infrastructure',
      description: 'Building the future with durable steel structures.',
      cta: 'View Projects',
    },
  ];

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Automatically cycle through images only on client-side
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [mounted, slides.length]);

  // GSAP animation for background and text change
  useEffect(() => {
    if (!mounted || !backgroundRef.current) return;

    // Animate background image transition
    const currentBackground = backgroundRef.current;
    
    gsap.to(currentBackground, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Safely update the background image
        if (currentBackground) {
          currentBackground.style.backgroundImage = `url(${slides[activeIndex].full})`;
          
          gsap.to(currentBackground, {
            opacity: 1,
            duration: 0.5,
          });
        }
      },
    });

    // Animate text transition
    gsap.to('.project-content', {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    // Highlight the active thumbnail
    thumbnailRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          scale: index === activeIndex ? 1.1 : 1,
          opacity: index === activeIndex ? 1 : 0.6,
          duration: 0.3,
        });
      }
    });
  }, [mounted, activeIndex, slides]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Full Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: mounted ? `url(${slides[activeIndex].full})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          imageRendering: 'auto'
        }}
      ></div>

      

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-dark/40"></div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-70 flex flex-col justify-center items-center h-full text-center text-background-light px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[activeIndex].title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          {slides[activeIndex].description}
        </p>
        <button className="bg-secondary text-background-light px-6 py-3 rounded-lg hover:bg-accent-DEFAULT/90 transition duration-300">
          {slides[activeIndex].cta}
        </button>
      </div>

      {/* Thumbnails at the Bottom */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (thumbnailRefs.current[index] = el)}
            className="w-12 h-12 md:w-16 md:h-16 border-2 border-transparent rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={slide.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;