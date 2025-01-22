import Image from "next/image";
import Link from "next/link";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <nav className={styles.nav}>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Hi, I'm [Your Name]</h2>
          <p>A passionate developer building amazing web experiences</p>
        </section>

        <section className={styles.featured}>
          <h3>Featured Projects</h3>
          <div className={styles.projectGrid}>
            {/* Project cards will go here */}
            <div className={styles.projectCard}>
              <h4>Project 1</h4>
              <p>Short description of your project</p>
            </div>
            <div className={styles.projectCard}>
              <h4>Project 2</h4>
              <p>Short description of your project</p>
            </div>
          </div>
        </section>

        <section className={styles.skills}>
          <h3>Skills</h3>
          <div className={styles.skillsList}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>CSS</span>
            {/* Add more skills */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
} 