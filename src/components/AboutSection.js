'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Particles } from 'react-tsparticles';
import CountUp from 'react-countup';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Statistics data
  const stats = [
    { value: 25, label: 'Years of Experience' },
    { value: 5000, label: 'Projects Completed' },
    { value: 120, label: 'Countries Served' },
    { value: 98, label: 'Client Satisfaction' },
  ];

  // GSAP Animation on Scroll or Initial Render
  useEffect(() => {
    // Ensure initial visibility
    setIsVisible(true);

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        toggleActions: 'play none none reverse', // Ensures animation plays on scroll
      },
    });

    // Initial animation
    gsap.set([imageRef.current, textRef.current], { opacity: 0, y: 50 });

    // Animate elements
    tl.to(imageRef.current, { 
      opacity: 1, 
      x: 0, 
      duration: 1,
      ease: 'power2.out'
    })
    .to(textRef.current, { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5');

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      className={`relative py-16 px-4 md:py-24 md:px-8 bg-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="about"
    >
      <div className="absolute inset-0 -z-10">
        <Particles
          options={{
            background: { color: '#EDF2F7' },
            particles: {
              number: { value: 60 },
              color: { value: '#2B6CB0' },
              move: { enable: true }
            }
          }}
        />
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          ref={imageRef}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
        >
          <img 
            src="/hero4.jpg" 
            alt="About Us" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
        
        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
          <p className="text-gray-600 mb-6">
            We are a leading provider of high-quality steel products, offering innovative
            solutions for industrial and construction needs.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to build a greener future using eco-friendly processes and
            cutting-edge technology for sustainable steel manufacturing.
          </p>
          <button className="bg-secondary text-background-light px-6 py-3 rounded-lg hover:bg-secondary/90 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;