// pages/projects.js
import Image from 'next/image';
import styles from '../styles/Project.module.css';
import ClientFeedback from '../components/ClientsFeedback';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with shopping cart, payment gateway integration, and admin dashboard.',
        image: '/images/project1.jpg',
        skills: ['React', 'Node.js', 'MongoDB'],
        link: '/projects/e-commerce',
    },
    {
        id: 2,
        title: 'A Portfolio Website',
        description: 'A modern, responsive portfolio website built to showcase my skills and projects. Optimized for SEO.',
        image: '/images/project2.jpg',
        skills: ['Next.js', 'CSS', 'Vercel'],
        link: '/projects/portfolio',
    },
    {
        id: 3,
        title: 'Task Management App',
        description: 'A productivity tool with real-time collaboration, project tracking, and analytics features.',
        image: '/images/project3.jpg',
        skills: ['Vue', 'Firebase', 'Tailwind CSS'],
        link: '/projects/task-manager',
    },
];

const Projects = () => (
    <div className={styles.container}>
        <h1>My Projects</h1>
        <div className={styles.grid}>
            {projects.map((project) => (
                <div key={project.id} className={styles.card}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className={styles.projectImage}
                    />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <ul className={styles.skills}>
                        {project.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <ClientFeedback />
    </div>
);

export default Projects;
