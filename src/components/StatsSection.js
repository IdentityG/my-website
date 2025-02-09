'use client'; // Mark as a Client Component

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const statsRef = useRef(null);
  const numberRefs = useRef([]);

  // Stats data
  const stats = [
    {
      number: 150,
      text: 'Projects Completed',
    },
    {
      number: 25,
      text: 'Years of Experience',
    },
    {
      number: 500,
      text: 'Happy Clients',
    },
    {
      number: 50,
      text: 'Awards Won',
    },
  ];

  // GSAP Animation for counting numbers
  useEffect(() => {
    numberRefs.current.forEach((numberRef, index) => {
      const targetNumber = stats[index].number;

      gsap.fromTo(
        numberRef,
        {
          innerText: 0,
        },
        {
          innerText: targetNumber,
          duration: 2,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%', // Start animation when the top of the section is 70% in view
            end: 'bottom 30%', // End animation when the bottom of the section is 30% in view
            toggleActions: 'play none none none', // Play animation once
          },
          snap: {
            innerText: 1, // Snap to whole numbers
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={statsRef}
      className="py-16 md:py-24 md:px-8 bg-background-light"
      id="stats"
    >
      <div className="container mx-auto px-6px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">
                <span ref={(el) => (numberRefs.current[index] = el)}>0</span>+
              </div>
              <p className="text-lg text-primary-dark">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;