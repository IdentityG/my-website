"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of steel do you offer?",
      answer: "We provide carbon steel, stainless steel, alloy steel, and more for various industries.",
    },
    {
      question: "How do I place an order?",
      answer: "You can contact our sales team or use our online portal to submit your requirements.",
    },
    {
      question: "What is your delivery timeline?",
      answer: "Standard orders take 7-10 business days. Custom orders may take longer.",
    },
    {
      question: "Do you provide custom solutions?",
      answer: "Yes, we offer tailored steel solutions based on your specifications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-primary-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 border-b border-gray-200 transition-all hover:bg-gray-100"
              >
                <span className="text-lg font-semibold text-primary-dark">{faq.question}</span>
                <motion.span
                  className="text-2xl text-accent-DEFAULT"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? "➖" : "➕"}
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="p-6 text-primary-dark"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
