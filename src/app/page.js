'use client';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Welcome to Shubhra's Blog 🚀</h1>
          <p className={styles.heroSubtitle}>Insights, Code, and Creativity by <strong>Shubhrajit Ghosh</strong></p>
        </section>

        <section className={styles.blogIntro}>
          <h2>🔥 Featured Topics</h2>
          <div className={styles.blogGrid}>
            <div className={styles.blogCard}>
              <h3>JavaScript in 2025</h3>
              <p>Explore the evolving landscape of JavaScript, frameworks, and what's next.</p>
            </div>
            <div className={styles.blogCard}>
              <h3>Next.js 14 Highlights</h3>
              <p>Learn how to master app routing, server components, and edge functions.</p>
            </div>
            <div className={styles.blogCard}>
              <h3>React UI Tips</h3>
              <p>Level up your React apps with optimized rendering and modern UI libraries.</p>
            </div>
          </div>
        </section>

        <section className={styles.aboutMe}>
          <h2>🧠 About This Blog</h2>
          <p>
            This blog is a collection of thoughts, tutorials, and guides built by a passionate web developer on a mission to explore the full stack. Built with ❤️ using <strong>Next.js</strong>.
          </p>
        </section>
      </main>
    </div>
  );
}
