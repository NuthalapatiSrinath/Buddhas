import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./ServicesPage.module.css";

// 1. Import your existing components
import ProfessionalServices from "../../components/ProfessionalServices/ProfessionalServices";
import ConnectToUs from "../../components/ConnectToUs/ConnectToUs";

const ServicesPage = () => {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section
        className={styles.header}
        style={{ backgroundImage: "url('/images/contact.webp')" }}
      >
        <div className={styles.overlay}></div>
        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.breadcrumb}>
            <Link to="/">Home</Link> / Services
          </p>
          <p>
            We build trust, ensure safety, and deliver smart solutions through
            innovation, discipline, and professional excellence
          </p>
        </motion.div>
      </section>

      {/* 2. Directly Render the Existing Component */}
      <ProfessionalServices />

      {/* Footer CTA */}
      <ConnectToUs />
    </div>
  );
};

export default ServicesPage;
