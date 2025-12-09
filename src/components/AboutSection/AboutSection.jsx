import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* --- Left: Image Grid & Rotating Badge --- */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageGrid}>
            <div className={styles.tallImage}>
              <img src="/images/1.webp" alt="Security Team" />
            </div>
            <div className={styles.stackedImages}>
              <img src="/images/2.webp" alt="Patrol" />
              <img src="/images/3.webp" alt="Guard" />
            </div>
          </div>

          {/* Badge: Dotted Ring is FIXED, Image ROTATES */}
          <div className={styles.badgeWrapper}>
            <div className={styles.dashedRing}></div> {/* Static Ring */}
            <div className={styles.rotatingContent}>
              <img
                src="/images/logo1.webp"
                alt="Badge"
                className={styles.badgeImage}
              />
            </div>
          </div>
        </div>

        {/* --- Right: Content --- */}
        <div className={styles.content}>
          <span className={styles.subTitle}>ABOUT US</span>
          <h2 className={styles.title}>
            Redefining Security{" "}
            <span className={styles.highlight}>for the</span>
            <br />
            <span className={styles.highlightBlue}>Modern World</span>
          </h2>

          <p className={styles.description}>
            We do more than conventional guarding at NSF India. We aim to
            provide professional security and end-to-end facility services that
            uphold our integrity, smart solutions, and reliable manpower. We
            operate in several states and have deep knowledge of evolving
            threats.
          </p>

          {/* --- Feature Box: Hexagon Image + Gradient Text --- */}
          <div className={styles.featureContainer}>
            {/* 1. Hexagon Image Part */}
            <div className={styles.featureHexagon}>
              <img
                src="/images/aboutus.webp"
                alt="Feature Illustration"
                className={styles.featureImg}
              />
            </div>

            {/* 2. Gradient Text Part */}
            <div className={styles.featureTextBox}>
              <h3>Always On, Always Alert</h3>
              <p>
                Round-the-clock security services ensuring constant protection,
                rapid response, and peace of mind every hour.
              </p>
            </div>
          </div>

          {/* Checklist & Contact */}
          <div className={styles.actionRow}>
            <ul className={styles.checklist}>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} /> Verified
                & Trained Personnel
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} /> 24/7
                Security Without Compromise
              </li>
              <li>
                <CheckCircle2 size={18} className={styles.checkIcon} />{" "}
                Nationwide Operational Reach
              </li>
            </ul>

            <div className={styles.contactActions}>
              {/* Clickable Phone Number */}
              <a href="tel:+919148777937" className={styles.phoneGroup}>
                <div className={styles.phoneIconCircle}>
                  <Phone size={20} fill="white" />
                </div>
                <span className={styles.phoneNumber}>+91-91487 77937</span>
              </a>

              <Link to="/contact" className={styles.contactBtn}>
                Get in touch with us at <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
