"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactDetail = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Map Section */}
        <motion.div
          className="w-full h-64 md:h-80 mb-12 rounded-lg overflow-hidden shadow-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.95565101531576!3d-37.81732797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1fcefdf%3A0x2c0c0e3c2f07b30!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1623123456789!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="p-8 bg-gray-100 rounded-lg shadow-lg"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent-DEFAULT">Our Office</h3>
            <p className="mb-4"><strong>📍 Address:</strong> 123 Steel Avenue, Industrial City, USA</p>
            <p className="mb-4"><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
            <p className="mb-4"><strong>📧 Email:</strong> info@steelcompany.com</p>
            <p>We're here to help! Feel free to reach out to us anytime.</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="p-8 bg-gray-100 rounded-lg shadow-lg"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent-DEFAULT">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-DEFAULT placeholder:text-gray-600 text-black" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Enter your message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent-DEFAULT placeholder:text-gray-600 text-black"></textarea>
              </div>
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

export default ContactDetail;
