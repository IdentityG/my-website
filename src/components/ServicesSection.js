"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const cardRefs = useRef([]);
  const [isClient, setIsClient] = useState(false); // Track if client-side rendering has started

  const services = [
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
  ];

  useEffect(() => {
    setIsClient(true); // Ensure GSAP animations run only after hydration
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (!isClient) return;

    const tl = gsap.timeline();

    cardRefs.current.forEach((card, index) => {
      gsap.set(card, { opacity: 1, y: 0 }); // Ensure default visibility

      const anim = gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: "top 80%",
        onEnter: () => anim.play(),
        onEnterBack: () => anim.play(),
        onLeave: () => anim.reverse(),
        onLeaveBack: () => anim.reverse(),
      });
    });

    // ✅ Fix: Trigger animation immediately if the section is already visible
    if (servicesRef.current) {
      const rect = servicesRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        tl.play();
      }
    }

    // ✅ Fix: Refresh ScrollTrigger to detect elements correctly
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  return (
    <section
      ref={servicesRef}
      className="relative py-16 px-4 md:py-24 md:px-8 bg-white opacity-100"
      id="services"
    >
      <div className="container mx-auto px-6 space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark">
          Our Services
        </h2>
        {isClient && ( // Only render after hydration
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
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
