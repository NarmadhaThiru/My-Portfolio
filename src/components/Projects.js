// src/components/Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Project Alpha',
        description: 'A dynamic web application built with React and Node.js. Features user authentication and real-time data updates.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://github.com/yourusername/project-alpha', // Replace with your project link
        demo: 'https://yourprojectalpha.com' // Replace with your demo link
    },
    {
        id: 2,
        title: 'Project Beta',
        description: 'An single-page application for task management, demonstrating advanced state management with Redux.',
        tech: ['React', 'Redux', 'Material-UI', 'Firebase'],
        link: 'https://github.com/yourusername/project-beta', // Replace with your project link
        demo: 'https://yourprojectbeta.com' // Replace with your demo link
    },
    // Add more projects here
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
