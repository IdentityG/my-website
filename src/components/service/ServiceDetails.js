"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const ServiceDetails = () => {
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

  // Framer Motion Variants for animations
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
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-white text-center" style={{ backgroundImage: "url('thump2.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> 
      <div className="container mx-auto relative z-10"> {/* ✅ Ensures text stays above overlay */}
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Our Expert Steel Services
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      We provide industry-leading steel solutions for businesses worldwide. Explore our range of services tailored to meet your needs.
    </motion.p>
  </div>
      </section>

      {/* About Services Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary-dark"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              About Our Services
            </motion.h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto mt-4 text-primary-dark"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our steel services encompass fabrication, distribution, recycling, and more. We deliver top-quality materials and expert craftsmanship to industries worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-primary-dark"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>

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
                <motion.div className="relative h-48 overflow-hidden" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                  <motion.img src={service.icon} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </motion.div>

                <div className="relative z-10 space-y-4 p-6">
                  <h3 className="text-2xl font-bold text-primary-dark">{service.title}</h3>
                  <p className="text-primary-dark">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary-dark"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why Choose Us?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Top Quality Materials", "Expert Craftsmanship", "Customer Satisfaction"].map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-primary-dark">{reason}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get Started with Our Services</h2>
          <p className="mt-4 text-white">Contact us today for expert steel solutions tailored to your needs.</p>
          <motion.button
            className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/contact" className="text-primary-dark">Contact Us</Link>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
