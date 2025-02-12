"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactDetail = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const animationRef = useRef(null); // Prevent multiple re-initializations

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill(); // Ensure old animations are removed before reinitializing
    }

    gsap.set([formRef.current, contactInfoRef.current], { opacity: 0, y: 50 });

    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        once: true, // Ensure it runs only once and doesn't reverse
      },
    });

    animationRef.current
      .to(formRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .to(contactInfoRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5");

    return () => {
      animationRef.current.kill(); // Clean up GSAP animations on unmount
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-primary-dark text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div
            ref={contactInfoRef}
            className="p-8 bg-primary-lighter rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
            <p className="mb-4"><strong>Address:</strong> 123 Steel Avenue, Industrial City, USA</p>
            <p className="mb-4"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-4"><strong>Email:</strong> info@steelcompany.com</p>
            <p>We're here to help! Feel free to reach out to us anytime.</p>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="p-8 bg-primary-lighter rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black"></textarea>
              </div>
              <button type="submit"
                className="w-full py-2 px-4 bg-accent-DEFAULT text-white font-semibold rounded-md hover:bg-accent-hover transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
