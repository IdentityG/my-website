import React from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { stats, milestones, teamMembers } from '@/data/aboutData';

const AboutDetail = () => {

    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
  
    const stats = [
      { value: 25, label: 'Years of Experience' },
      { value: 5000, label: 'Projects Completed' },
      { value: 120, label: 'Countries Served' },
      { value: 98, label: 'Client Satisfaction' },
    ];
  
    const teamMembers = [
      {
        name: 'John Doe',
        role: 'CEO & Founder',
        image: '/hero1.jpg',
      },
      {
        name: 'Jane Smith',
        role: 'COO',
        image: '/hero2.jpg',
      },
      // Add more team members
    ];
  
    const milestones = [
      { year: 2000, event: 'Company Founded' },
      { year: 2005, event: 'First International Project' },
      { year: 2010, event: 'Reached 1000 Projects' },
      { year: 2020, event: 'Sustainable Manufacturing Initiative' },
    ];
  
    // GSAP Animation on Scroll
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%', // Start animation when the top of the section is 80% in view
          end: 'bottom 20%', // End animation when the bottom of the section is 20% in view
          scrub: 1, // Smooth scrubbing effect
        },
      });
  
      // Image animation
      tl.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
      });
  
      // Text animation
      tl.from(
        textRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 1,
        },
        '-=0.5' // Overlap with the previous animation
      );
    }, []);
  
    return (
      <section
        ref={aboutRef}
        className="relative py-16 px-4 md:py-24 md:px-8 overflow-hidden"
        id="about"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            options={{
              background: {
                color: '#f3f4f6',
              },
              particles: {
                number: { value: 80 },
                move: { enable: true },
                size: { value: 3 },
              },
            }}
          />
        </div>
  
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Image and Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              ref={imageRef}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/hero4.jpg"
                alt="About Us"
                className="w-full h-auto object-cover"
                style={{ transform: 'translateZ(0)' }}
              />
            </motion.div>
  
            <div ref={textRef} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About Us
              </h2>
              <p className="text-lg text-gray-600">
                We are a leading provider of high-quality steel products, offering innovative
                solutions for industrial and construction needs. With decades of experience,
                we are committed to delivering sustainable and custom steel fabrication
                services to clients worldwide.
              </p>
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      className="text-2xl font-bold text-green-500"
                    />
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Milestones Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-gray-200"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-8 ${index % 2 === 0 ? 'md:left-0' : 'md:left-1/2'}`}
                >
                  <div className="p-6 bg-white rounded-lg shadow-md max-w-md">
                    <h4 className="text-xl font-bold text-gray-900">
                      {milestone.year}
                    </h4>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Team Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
                    <h4 className="text-white font-bold">{member.name}</h4>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutDetail