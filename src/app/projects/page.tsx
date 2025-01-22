import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.css";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A full-stack web application built with Next.js and MongoDB",
    image: "/project1.jpg", // Add your project image
    technologies: ["Next.js", "MongoDB", "TypeScript"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An e-commerce platform with Stripe integration",
    image: "/project2.jpg", // Add your project image
    technologies: ["React", "Node.js", "Stripe"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.backLink}>
          ← Back to Dashboard
        </Link>
        <h1>My Projects</h1>
      </header>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div style={{ margin: '1rem 0' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Live Demo →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 