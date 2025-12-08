import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background Image Container */}
      <div
        className={styles.background}
        // Make sure to add your image as 'hero-bg.jpg' in 'public/images/' folder
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      >
        {/* Dark Overlay for better text visibility */}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subHeading}>
            Your Safety, Our Responsibility
          </span>

          <h1 className={styles.mainHeading}>
            Advanced Security Services Backed by <br />
            Training, Technology, and Trust
          </h1>

          <p className={styles.description}>
            Trusted by leading businesses, our certified professionals deliver
            dependable protection across India's corporate and industrial
            sectors.
          </p>

          <Link to="/contact" className={styles.ctaButton}>
            Book your appointment now.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
