"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Motion Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="container mx-auto px-6">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <motion.div
            className="p-8 bg-primary-lighter rounded-lg shadow-lg"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Office</h3>
            <p className="mb-4"><strong>Address:</strong> 123 Steel Avenue, Industrial City, USA</p>
            <p className="mb-4"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-4"><strong>Email:</strong> info@steelcompany.com</p>
            <p>We're here to help! Feel free to reach out to us anytime.</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 bg-primary-lighter rounded-lg shadow-lg"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }} // Delays form appearance slightly after contact info
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter your message"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-accent-DEFAULT placeholder:text-gray-600 text-black"></textarea>
              </motion.div>

              {/* Submit Button Animation */}
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md border border-blue-700 shadow-lg shadow-blue-300 hover:shadow-xl hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
             >
                Send Message
</motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
