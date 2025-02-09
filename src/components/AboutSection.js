'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Particles } from 'react-tsparticles';
import CountUp from 'react-countup';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Statistics data
  const stats = [
    { value: 25, label: 'Years of Experience' },
    { value: 5000, label: 'Projects Completed' },
    { value: 120, label: 'Countries Served' },
    { value: 98, label: 'Client Satisfaction' },
  ];

  // GSAP Animation on Scroll
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    tl.from(imageRef.current, { opacity: 0, x: -100, duration: 1 })
     .from(textRef.current, { opacity: 0, y: 50, duration: 1 }, '-=0.5');
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative py-16 px-4 md:py-24 md:px-8 bg-white"
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

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={imageRef}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src="/hero4.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div ref={textRef} className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            About Us
          </h2>
          <div className="space-y-6 text-primary">
            <p>
              We are a leading provider of high-quality steel products, offering innovative
              solutions for industrial and construction needs.
            </p>
            <p>
              Our mission is to build a greener future using eco-friendly processes and
              cutting-edge technology for sustainable steel manufacturing.
            </p>
          </div>

          <button className="bg-secondary text-background-light px-6 py-3 rounded-lg hover:bg-secondary/90 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;