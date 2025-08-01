'use client';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About <span className={styles.highlight}>Hunting Coder</span></h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>🚀 Our Mission</h2>
        <p>
          At <strong>Hunting Coder</strong>, we are passionate about simplifying technology for developers. Whether you're a student, a beginner, or an experienced coder, our platform helps you stay ahead with high-quality blogs on programming, tools, and real-world tech trends.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>💡 What We Offer</h2>
        <ul className={styles.list}>
          <li>📝 In-depth technical articles and tutorials</li>
          <li>📚 Beginner to advanced coding resources</li>
          <li>🌐 Frontend, backend, DevOps, and AI/ML content</li>
          <li>🧠 Thoughtful opinions, developer journeys, and career tips</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>🤝 Connect With Us</h2>
        <p>
          Got feedback, suggestions, or collaboration ideas? We’d love to hear from you!
        </p>
        <p>
          Drop us a message through our <a className={styles.link} href="/contact">Contact Page</a>, or follow us on our socials.
        </p>
      </section>
    </div>
  );
}
