"use client";
import React from "react";
import { motion } from "framer-motion";

const IndustriesServed = () => {
  const industries = [
    { name: "Construction", description: "Providing high-quality steel for infrastructure and building projects.", icon: "🏗️" },
    { name: "Automotive", description: "Supplying durable steel for vehicle manufacturing and components.", icon: "🚗" },
    { name: "Aerospace", description: "Delivering precision-engineered steel for aerospace applications.", icon: "✈️" },
    { name: "Energy", description: "Supporting renewable and traditional energy projects with robust steel solutions.", icon: "⚡" },
    { name: "Shipbuilding", description: "Providing corrosion-resistant steel for shipbuilding and marine applications.", icon: "🚢" },
    { name: "Heavy Machinery", description: "Supplying high-strength steel for heavy machinery and equipment.", icon: "🏭" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-6">
        {/* Section Title Animation */}
        <motion.h2
          className="text-4xl font-bold text-center text-primary-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.h2>

        {/* Staggered Grid Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform"
            >
              {/* Emoji Icon Animation */}
              <motion.div
                className="text-4xl mb-4 text-accent-DEFAULT"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 150, damping: 5 }}
              >
                {industry.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">{industry.name}</h3>
              <p className="text-primary-dark">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;
