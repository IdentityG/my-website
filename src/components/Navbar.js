'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation'; // ✅ Use usePathname instead of useRouter
import { gsap } from 'gsap';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const pathname = usePathname(); // ✅ Get current path

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (isMenuOpen) {
      gsap.from(menuRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from(menuRef.current.querySelectorAll('a'), {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power2.out',
        delay: 0.2,
      });

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
      onComplete: () => setIsMenuOpen(false),
    });
  };

  // GSAP Animation for Navbar Links (Desktop)
  useEffect(() => {
    linksRef.current.forEach((link) => {
      if (link) {
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
      }
    });
  }, []);

  // Function to check if a link is active
  const isActive = (path) => pathname === path;

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
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/service', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                ref={(el) => (linksRef.current[index] = el)}
                className={`text-gray-700 hover:text-blue-500 ${
                  isActive(link.href) ? 'text-blue-600 font-bold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-500 focus:outline-none z-50"
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
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/service', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-2xl hover:text-blue-500 ${
                  isActive(link.href) ? 'text-blue-600 font-bold' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-8 social-icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
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
