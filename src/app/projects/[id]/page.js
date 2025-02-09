'use client'; // Mark as a Client Component

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { gsap } from 'gsap';

const ProjectPage = () => {
  const { id } = useParams(); // Get the dynamic `id` parameter from the URL
  const [project, setProject] = useState(null);

  // Fetch project data based on ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/projects.json'); // Fetch from the public folder
        const data = await response.json();
        const selectedProject = data.find((p) => p.id === parseInt(id));
        if (!selectedProject) {
          console.error('Project not found');
          return;
        }
        setProject(selectedProject);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProject();
  }, [id]); // Re-fetch data when `id` changes

  // GSAP Animation for page entrance
  useEffect(() => {
    if (typeof window !== 'undefined' && project) {
      gsap.to('.project-content', {
        opacity: 1,
        y: 0,
        duration: 1,
      });
    }
  }, [project]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-16 px-4 md:py-24 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto project-content">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        <p className="text-lg text-gray-600 mb-8">{project.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.moreImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} - Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;