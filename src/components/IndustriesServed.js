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

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform"
            >
              <div className="text-4xl mb-4 text-accent-DEFAULT">{industry.icon}</div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">{industry.name}</h3>
              <p className="text-primary-dark">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
