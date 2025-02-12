"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { number: 150, text: "Projects Completed" },
    { number: 25, text: "Years of Experience" },
    { number: 500, text: "Happy Clients" },
    { number: 50, text: "Awards Won" },
  ];

  return (
    <section className="py-16 md:py-24 md:px-8 bg-background-light" id="stats">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} text={stat.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Fixed: Smooth Animated Number Counting
const StatCard = ({ number, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Motion value for the count animation
  const count = useMotionValue(0);
  const springCount = useSpring(count, { damping: 10, stiffness: 100 });

  // State to store and display the animated number
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(number); // Start the animation
    }

    // Listen for changes in springCount and update state
    const unsubscribe = springCount.on("change", (latest) => {
      setDisplayCount(Math.floor(latest));
    });

    return () => unsubscribe(); // Cleanup listener
  }, [isInView, count, number, springCount]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl md:text-6xl font-bold text-secondary mb-4">
        {displayCount}+
      </div>
      <p className="text-lg text-primary-dark">{text}</p>
    </motion.div>
  );
};

export default StatsSection;
