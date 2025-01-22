import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.backLink}>
          ← Back to Dashboard
        </Link>
        <h1>About Me</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.profile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg" // Add your profile image
              alt="Profile picture"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </div>
          <h2>Your Name</h2>
          <p className={styles.title}>Full Stack Developer</p>
        </div>

        <section className={styles.section}>
          <h3>Background</h3>
          <p>
            Write about your background, education, and journey into software development.
            Share what drives you and what you're passionate about in technology.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Skills & Expertise</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>CSS/SASS</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h4>Tools & Others</h4>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3>Experience</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h4>Company Name</h4>
              <p className={styles.timelinePeriod}>2022 - Present</p>
              <p>Senior Full Stack Developer</p>
              <ul>
                <li>Key achievement or responsibility</li>
                <li>Another significant contribution</li>
              </ul>
            </div>
            <div className={styles.timelineItem}>
              <h4>Previous Company</h4>
              <p className={styles.timelinePeriod}>2020 - 2022</p>
              <p>Frontend Developer</p>
              <ul>
                <li>Key achievement or responsibility</li>
                <li>Another significant contribution</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3>Contact</h3>
          <div className={styles.contact}>
            <a href="mailto:your.email@example.com" className={styles.contactLink}>
              Email →
            </a>
            <a href="https://linkedin.com/in/yourprofile" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              LinkedIn →
            </a>
            <a href="https://github.com/yourusername" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
} 