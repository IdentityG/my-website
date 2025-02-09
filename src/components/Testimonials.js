"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const testimonialCardsRef = useRef([]);

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

    // GSAP animation for each testimonial card
    testimonialCardsRef.current.forEach((card, index) => {
      const direction = index % 2 === 0 ? -100 : 100; // Alternate directions
      gsap.from(card, {
        x: direction,
        opacity: 0,
        duration: 1,
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

  // Testimonial data
  const testimonials = [
    {
      name: 'John Doe',
      company: 'ABC Construction',
      testimonial:
        'The steel quality provided by this company is exceptional. Their products have greatly improved our construction projects.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      company: 'XYZ Automotive',
      testimonial:
        'We rely on their steel for our automotive components. Their service and quality are unmatched.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Michael Brown',
      company: 'AeroTech Solutions',
      testimonial:
        'Their precision-engineered steel is perfect for our aerospace applications. Highly recommended!',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Sarah Johnson',
      company: 'Green Energy Corp',
      testimonial:
        'Their steel solutions have been instrumental in our renewable energy projects. Great partnership!',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={(el) => (testimonialCardsRef.current[index] = el)}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary-light">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-primary-light">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;