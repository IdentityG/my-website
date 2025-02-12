"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const testimonialCardsRef = useRef([]);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  useEffect(() => {
    setIsClient(true); // Ensure animations only run after hydration
  }, []);

  useEffect(() => {
    if (!isClient) return; // Prevent GSAP from running during SSR

    let ctx = gsap.context(() => {
      testimonialCardsRef.current.forEach((card, index) => {
        gsap.set(card, { opacity: 1, scale: 1 }); // Ensure default visibility

        const anim = gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
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
          trigger: testimonialsRef.current,
          start: "top 80%",
          onEnter: () => anim.play(),
          onEnterBack: () => anim.play(),
        });
      });

      // ✅ Fix: Trigger animation if the section is already visible
      if (testimonialsRef.current) {
        const rect = testimonialsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          gsap.fromTo(
            testimonialCardsRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1 }
          );
        }
      }

      // ✅ Fix: Refresh ScrollTrigger to detect elements correctly
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    }, testimonialsRef);

    return () => ctx.revert(); // Proper cleanup to prevent memory leaks
  }, [isClient]);

  const testimonials = [
    { name: "John Doe", company: "ABC Construction", testimonial: "The steel quality provided by this company is exceptional. Their products have greatly improved our construction projects.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", company: "XYZ Automotive", testimonial: "We rely on their steel for our automotive components. Their service and quality are unmatched.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Michael Brown", company: "AeroTech Solutions", testimonial: "Their precision-engineered steel is perfect for our aerospace applications. Highly recommended!", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Sarah Johnson", company: "Green Energy Corp", testimonial: "Their steel solutions have been instrumental in our renewable energy projects. Great partnership!", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  return (
    <section ref={testimonialsRef} className="py-20 bg-white opacity-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">What Our Clients Say</h2>
        {isClient && ( // Render only after hydration
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
                    <h3 className="text-lg font-semibold text-primary-dark">{testimonial.name}</h3>
                    <p className="text-sm text-primary-light">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-primary-dark">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
