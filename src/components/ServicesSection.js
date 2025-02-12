"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const servicesRef = useRef(null);

  const services = [
    {
      icon: "/hero1.jpg",
      title: "Steel Fabrication",
      description: "Custom steel fabrication services tailored to meet your specific requirements.",
    },
    {
      icon: "/thump2.jpg",
      title: "Structural Steel",
      description: "High-quality structural steel for building robust and durable infrastructure.",
    },
    {
      icon: "/thump3.jpg",
      title: "Steel Distribution",
      description: "Global distribution of steel products to meet your demands.",
    },
    {
      icon: "/hero6.jpg",
      title: "Steel Recycling",
      description: "Eco-friendly steel recycling services to promote sustainability.",
    },
  ];

  // Framer Motion Variants for staggered entrance animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggered effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={servicesRef} className="relative py-16 px-4 md:py-24 md:px-8 bg-white" id="services">
      <div className="container mx-auto px-6 space-y-16 py-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary-dark"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Staggered Animation for Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group relative transition-all duration-500"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Container with Parallax Effect */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>

              {/* Service Content */}
              <div className="relative z-10 space-y-4 p-6">
                <h3 className="text-2xl font-bold text-primary-dark">{service.title}</h3>
                <p className="text-primary-dark">{service.description}</p>

                {/* Smooth Button Reveal on Hover */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary-dark transition duration-300">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
