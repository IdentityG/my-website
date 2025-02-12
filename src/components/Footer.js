"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  // Animation Variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const linksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.footer
      className="bg-primary-dark text-white py-12"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Company Info */}
          <motion.div variants={footerVariants}>
            <h3 className="text-2xl font-bold mb-4 text-accent-DEFAULT">SteelCo</h3>
            <p className="text-sm mb-4">
              Premium steel solutions tailored to your needs. Quality, reliability, and innovation.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                { icon: <FaFacebookF />, link: "#", name: "Facebook" },
                { icon: <FaTwitter />, link: "#", name: "Twitter" },
                { icon: <FaInstagram />, link: "#", name: "Instagram" },
                { icon: <FaLinkedinIn />, link: "#", name: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  className="text-white hover:text-accent-DEFAULT transition-colors p-2 bg-gray-700 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Updated to Match Navbar) */}
          <motion.div variants={footerVariants}>
            <h4 className="text-lg font-semibold mb-4 text-accent-DEFAULT">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/service", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linksVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className="hover:text-accent-DEFAULT transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={footerVariants}>
            <h4 className="text-lg font-semibold mb-4 text-accent-DEFAULT">Contact Us</h4>
            <p className="mb-2">
              <strong className="font-bold">Address:</strong> 123 Steel Avenue, Industrial City, USA
            </p>
            <p className="mb-2">
              <strong className="font-bold">Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong className="font-bold">Email:</strong> info@steelcompany.com
            </p>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div className="mt-12 border-t border-gray-200 pt-6 text-center" variants={footerVariants}>
          <p className="text-sm">
            © {new Date().getFullYear()} SteelCo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
