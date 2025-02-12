"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const faqItemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    faqItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqItemsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-101"
            >
              <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 border-b border-gray-200">
                <span className="text-lg font-semibold text-primary-dark">{faq.question}</span>
                <span className="text-2xl text-accent-DEFAULT">{activeIndex === index ? "➖" : "➕"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-6 text-primary-dark">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
