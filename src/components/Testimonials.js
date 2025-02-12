"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", company: "ABC Construction", testimonial: "The steel quality provided by this company is exceptional. Their products have greatly improved our construction projects.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Jane Smith", company: "XYZ Automotive", testimonial: "We rely on their steel for our automotive components. Their service and quality are unmatched.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Michael Brown", company: "AeroTech Solutions", testimonial: "Their precision-engineered steel is perfect for our aerospace applications. Highly recommended!", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Sarah Johnson", company: "Green Energy Corp", testimonial: "Their steel solutions have been instrumental in our renewable energy projects. Great partnership!", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child animation for a smooth effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center text-primary-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Staggered Grid Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform"
            >
              {/* Profile Image & Text */}
              <div className="flex items-center mb-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 8 }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark">{testimonial.name}</h3>
                  <p className="text-sm text-primary-light">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-primary-dark">{testimonial.testimonial}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
