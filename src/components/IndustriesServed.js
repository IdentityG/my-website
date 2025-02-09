"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const IndustriesServed = () => {
  const sectionRef = useRef(null);
  const industryCardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the section
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    // GSAP animation for each industry card
    industryCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  // Data for industries served
  
  // Data for industries served
  const industries = [
    {
      name: 'Construction',
      description: 'Providing high-quality steel for infrastructure and building projects.',
      icon: '🏗️',
    },
    {
      name: 'Automotive',
      description: 'Supplying durable steel for vehicle manufacturing and components.',
      icon: '🚗',
    },
    {
      name: 'Aerospace',
      description: 'Delivering precision-engineered steel for aerospace applications.',
      icon: '✈️',
    },
    {
      name: 'Energy',
      description: 'Supporting renewable and traditional energy projects with robust steel solutions.',
      icon: '⚡',
    },
    {
      name: 'Shipbuilding',
      description: 'Providing corrosion-resistant steel for shipbuilding and marine applications.',
      icon: '🚢',
    },
    {
      name: 'Heavy Machinery',
      description: 'Supplying high-strength steel for heavy machinery and equipment.',
      icon: '🏭',
    },
  ];


  return (
    <section
      ref={sectionRef}
      className="py-16 bg-background-light"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              ref={(el) => (industryCardsRef.current[index] = el)}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-accent-DEFAULT">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                {industry.name}
              </h3>
              <p className="text-primary-light">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;