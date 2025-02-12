'use client'; // Mark as a Client Component

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const cardRefs = useRef([]);
  const [projects, setProjects] = useState([]);

  // Fetch projects data from the public JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json'); // Fetch from the public folder
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // GSAP Animation for card entrance
  useEffect(() => {
    // Set initial state
    cardRefs.current.forEach((cardRef) => {
      gsap.set(cardRef, { opacity: 1, y: 0 });
    });

    // Create animations
    cardRefs.current.forEach((cardRef, index) => {
      const anim = gsap.from(cardRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        paused: true, // Start paused
        delay: index * 0.2, // Staggered delay
      });

      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => anim.play(),
        onEnterBack: () => anim.play(),
        onLeave: () => anim.reverse(),
        onLeaveBack: () => anim.reverse(),
      });
    });

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]); // Re-run animation when projects data is loaded

  // GSAP Animation for text reveal
  useEffect(() => {
    cardRefs.current.forEach((cardRef) => {
      const title = cardRef.querySelector('h3');
      const description = cardRef.querySelector('p');
      const elements = [title, description];

      // Set initial state
      gsap.set(elements, { opacity: 1, y: 0 });

      // Create animations for text elements
      elements.forEach((element, index) => {
        const anim = gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          paused: true,
          delay: index * 0.2,
        });

        ScrollTrigger.create({
          trigger: cardRef,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => anim.play(),
          onEnterBack: () => anim.play(),
          onLeave: () => anim.reverse(),
          onLeaveBack: () => anim.reverse(),
        });
      });
    });

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  return (
    <section
      ref={projectsRef}
      className="py-16 md:py-24 md:px-8 bg-white"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-background-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-black mb-4">
                {project.description}
              </p>
              <Link
                href={`/projects/${project.id}`}
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark hover:shadow-lg transition-all duration-300"
              >
                See More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;