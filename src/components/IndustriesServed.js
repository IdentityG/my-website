"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustriesServed = () => {
  const industriesRef = useRef(null);
  const industryCardsRef = useRef([]);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  const industries = [
    { name: "Construction", description: "Providing high-quality steel for infrastructure and building projects.", icon: "🏗️" },
    { name: "Automotive", description: "Supplying durable steel for vehicle manufacturing and components.", icon: "🚗" },
    { name: "Aerospace", description: "Delivering precision-engineered steel for aerospace applications.", icon: "✈️" },
    { name: "Energy", description: "Supporting renewable and traditional energy projects with robust steel solutions.", icon: "⚡" },
    { name: "Shipbuilding", description: "Providing corrosion-resistant steel for shipbuilding and marine applications.", icon: "🚢" },
    { name: "Heavy Machinery", description: "Supplying high-strength steel for heavy machinery and equipment.", icon: "🏭" },
  ];

  useEffect(() => {
    setIsClient(true); // Ensure animations only run after hydration
  }, []);

  useEffect(() => {
    if (!isClient) return; // Prevent GSAP from running during SSR

    let ctx = gsap.context(() => {
      industryCardsRef.current.forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0, scale: 1 }); // Ensure default visibility

        const anim = gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        ScrollTrigger.create({
          trigger: industriesRef.current,
          start: "top 80%",
          onEnter: () => anim.play(),
          onEnterBack: () => anim.play(),
        });
      });

      // ✅ Fix: Trigger animation if the section is already visible
      if (industriesRef.current) {
        const rect = industriesRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          gsap.fromTo(
            industryCardsRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1 }
          );
        }
      }

      // ✅ Fix: Refresh ScrollTrigger to detect elements correctly
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    }, industriesRef);

    return () => ctx.revert(); // Proper cleanup to prevent memory leaks
  }, [isClient]);

  return (
    <section ref={industriesRef} className="py-16 bg-background-light opacity-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">Industries We Serve</h2>
        {isClient && ( // Render only after hydration
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                ref={(el) => (industryCardsRef.current[index] = el)}
                className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-4 text-accent-DEFAULT">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">{industry.name}</h3>
                <p className="text-primary-dark">{industry.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesServed;
