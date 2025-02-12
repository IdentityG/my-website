"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const cardRefs = useRef([]);
  const [services, setServices] = useState([
    {
      icon: "/hero1.jpg",
      title: "Steel Fabrication",
      description:
        "Custom steel fabrication services tailored to meet your specific requirements.",
    },
    {
      icon: "/thump2.jpg",
      title: "Structural Steel",
      description:
        "High-quality structural steel for building robust and durable infrastructure.",
    },
    {
      icon: "/thump3.jpg",
      title: "Steel Distribution",
      description:
        "Global distribution of steel products to meet your demands.",
    },
    {
      icon: "/hero6.jpg",
      title: "Steel Recycling",
      description:
        "Eco-friendly steel recycling services to promote sustainability.",
    },
  ]);

  // GSAP Animation for Card Entrance
  useEffect(() => {
      cardRefs.current.forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0 });

        const anim = gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          paused: true, // Start paused
          delay: index * 0.2, // Staggered delay
          ease: "power2.out",
        });

        ScrollTrigger.create({
          trigger: servicesRef.current,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => anim.play(),
          onEnterBack: () => anim.play(),
          onLeave: () => anim.reverse(),
          onLeaveBack: () => anim.reverse(),
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
  }, [services]); // Re-run animation when services data is loaded

  return (
    <section
      ref={servicesRef}
      className="relative py-16 px-4 md:py-24 md:px-8 bg-white"
      id="services"
    >
      <div className="container mx-auto px-6 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 hover:rotate-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative z-10 space-y-4 p-6">
                <h3 className="text-2xl font-bold text-primary-dark">
                  {service.title}
                </h3>
                <p className="text-primary-dark">{service.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
