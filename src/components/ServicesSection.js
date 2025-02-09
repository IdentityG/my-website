'use client'; // Mark as a Client Component

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Particles } from 'react-tsparticles';
import CountUp from 'react-countup';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const cardRefs = useRef([]);

  // Services data
  const services = [
    {
      icon: '/hero1.jpg', // Replace with your icon path
      title: 'Steel Fabrication',
      description:
        'Custom steel fabrication services tailored to meet your specific requirements. We deliver precision-engineered solutions for industrial and construction needs.',
    },
    {
      icon: '/thump2.jpg', // Replace with your icon path
      title: 'Structural Steel',
      description:
        'High-quality structural steel for building robust and durable infrastructure. Our products are designed to withstand the toughest conditions.',
    },
    {
      icon: '/thump3.jpg', // Replace with your icon path
      title: 'Steel Distribution',
      description:
        'Global distribution of steel products to meet your demands. We ensure timely delivery and exceptional customer service.',
    },
    {
      icon: '/hero6.jpg', // Replace with your icon path
      title: 'Steel Recycling',
      description:
        'Eco-friendly steel recycling services to promote sustainability. We help reduce waste and conserve resources for a greener future.',
    },
  ];

  const stats = [
    { value: 1000, label: 'Projects Completed' },
    { value: 25, label: 'Years of Experience' },
    { value: 98, label: 'Client Satisfaction' },
    { value: 50, label: 'Countries Served' },
  ];

  // GSAP Animation for card entrance
  useEffect(() => {
    cardRefs.current.forEach((cardRef, index) => {
      gsap.from(cardRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 70%', // Start animation when the top of the section is 70% in view
          end: 'bottom 30%', // End animation when the bottom of the section is 30% in view
          toggleActions: 'play none none none', // Play animation once
        },
        delay: index * 0.2, // Staggered delay
      });
    });
  }, []);

  return (
    <section
      ref={servicesRef}
      className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden bg-white"
      id="services"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          options={{
            background: {
              color: '#f3f4f6',
            },
            particles: {
              number: { value: 80 },
              move: { enable: true },
              size: { value: 3 },
            },
          }}
        />
      </div>

      <div className="container mx-auto px-6 space-y-16">
        {/* Services Cards */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white via-white/50"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-primary-dark">
                    {service.title}
                  </h3>
                  <p className="text-primary-dark">
                    {service.description}
                  </p>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                  >
                    <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       

        {/* Call to Action Section */}
        <div className="relative py-16 px-8 bg-secondary rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <Particles
              options={{
                background: {
                  color: '#2B6CB0',
                },
                particles: {
                  number: { value: 50 },
                  move: { enable: true },
                  size: { value: 3 },
                },
              }}
            />
          </div>
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-100">
              Contact us today to discuss your steel needs and get a free quote.
            </p>
            <button className="bg-white text-secondary px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;