'use client';

import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Particles } from 'react-tsparticles';

const stats = [
  { value: 25, label: 'Years of Experience' },
  { value: 5000, label: 'Projects Completed' },
  { value: 120, label: 'Countries Served' },
  { value: 98, label: 'Client Satisfaction' },
];

const milestones = [
  {
    year: 1998,
    title: 'Company Founding',
    description: 'Established as a small steel fabrication workshop'
  },
  {
    year: 2005,
    title: 'First International Project',
    description: 'Expanded operations to international markets'
  },
  {
    year: 2012,
    title: 'Sustainability Initiative',
    description: 'Launched comprehensive green manufacturing program'
  },
  {
    year: 2020,
    title: 'Digital Transformation',
    description: 'Implemented advanced technology in manufacturing'
  }
];

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/hero4.jpg'
  },
  {
    name: 'Emily Johnson',
    role: 'Chief Operations Officer',
    image: '/hero1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Engineering',
    image: '/hero6.jpg'
  },
  {
    name: 'Sarah Williams',
    role: 'Sustainability Director',
    image: '/thump2.jpg'
  }
];

const AboutDetail = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-100 py-16 md:py-24 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <Particles
            options={{
              background: { color: '#EDF2F7' },
              particles: {
                number: { value: 60 },
                color: { value: '#2B6CB0' },
                move: { enable: true }
              }
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img 
              src="/hero4.jpg" 
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-1/2 md:pl-12"
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-800">About Our Company</h1>
            <p className="text-gray-600 mb-6">
              We are a leading steel fabrication and distribution company with over 25 years 
              of experience. Our commitment to quality, innovation, and sustainability sets 
              us apart in the industry.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    className="text-3xl font-bold text-blue-600"
                  />
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{milestone.year}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;