'use client'; // Mark as a Client Component

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (isMenuOpen) {
      // Animate the mobile menu to slide in from the top
      gsap.from(menuRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power2.out',
      });

      // Animate each link to fade in sequentially
      gsap.from(menuRef.current.querySelectorAll('a'), {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.2,
      });

      // Animate social icons and address
      gsap.from(menuRef.current.querySelectorAll('.social-icon, .address'), {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.5,
      });
    }
  }, [isMenuOpen]);

  // Function to close the menu with animation
  const closeMenu = () => {
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => setIsMenuOpen(false), // Close the menu after animation
    });
  };

  // GSAP Animation for Navbar Links (Desktop)
  useEffect(() => {
    linksRef.current.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -5,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center z-50">
            <Link href="/" className="text-xl font-bold text-gray-800">
              SteelCo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              ref={(el) => (linksRef.current[0] = el)}
              className="text-gray-700 hover:text-green-500"
            >
              About
            </Link>
            <Link
              href="/service"
              ref={(el) => (linksRef.current[1] = el)}
              className="text-gray-700 hover:text-green-500"
            >
              Services
            </Link>
            <Link
              href="/projects"
              ref={(el) => (linksRef.current[2] = el)}
              className="text-gray-700 hover:text-green-500"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              ref={(el) => (linksRef.current[3] = el)}
              className="text-gray-700 hover:text-green-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-green-500 focus:outline-none z-50"
            onClick={() => (isMenuOpen ? closeMenu() : setIsMenuOpen(true))}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden fixed inset-0 bg-white flex flex-col justify-center items-center space-y-6 pt-16"
          >
            {/* Navigation Links */}
            <Link
              href="/about"
              className="text-2xl text-gray-700 hover:text-green-500"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/service"
              className="text-2xl text-gray-700 hover:text-green-500"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-2xl text-gray-700 hover:text-green-500"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-2xl text-gray-700 hover:text-green-500"
              onClick={closeMenu}
            >
              Contact
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-8 social-icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                </svg>
              </a>
            </div>

            {/* Address */}
            <div className="text-gray-700 text-center mt-8 address">
              <p>123 Steel Street</p>
              <p>Industrial City, IC 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;