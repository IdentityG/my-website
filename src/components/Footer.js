"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const footerLinksRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the footer
    if (footerLinksRef.current.length > 0) {
      gsap.from(footerLinksRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white text-primary-dark py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent-DEFAULT">SteelCo</h3>
            <p className="text-sm mb-4 text-primary-dark">
              Premium steel solutions tailored to your needs. Quality, reliability, and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-accent-DEFAULT hover:text-accent-hover transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-accent-DEFAULT hover:text-accent-hover transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-accent-DEFAULT hover:text-accent-hover transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-accent-DEFAULT hover:text-accent-hover transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-DEFAULT">Quick Links</h4>
            <ul>
              <li
                ref={(el) => (footerLinksRef.current[0] = el)}
                className="mb-2"
              >
                <a
                  href="#home"
                  className="hover:text-accent-hover transition-colors text-primary-dark"
                >
                  Home
                </a>
              </li>
              <li
                ref={(el) => (footerLinksRef.current[1] = el)}
                className="mb-2"
              >
                <a
                  href="#about"
                  className="hover:text-accent-hover transition-colors text-primary-dark"
                >
                  About Us
                </a>
              </li>
              <li
                ref={(el) => (footerLinksRef.current[2] = el)}
                className="mb-2"
              >
                <a
                  href="#services"
                  className="hover:text-accent-hover transition-colors text-primary-dark"
                >
                  Services
                </a>
              </li>
              <li
                ref={(el) => (footerLinksRef.current[3] = el)}
                className="mb-2"
              >
                <a
                  href="#products"
                  className="hover:text-accent-hover transition-colors text-primary-dark"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-DEFAULT">Contact Us</h4>
            <p className="mb-2 text-primary-dark">
              <strong className="font-bold">Address:</strong> 123 Steel Avenue, Industrial City, USA
            </p>
            <p className="mb-2 text-primary-dark">
              <strong className="font-bold">Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-primary-dark">
              <strong className="font-bold">Email:</strong> info@steelcompany.com
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-primary-dark">
            © {new Date().getFullYear()} SteelCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;