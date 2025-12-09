import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../data/servicesData"; // ✅ Import shared data
import styles from "./ProfessionalServices.module.css";

const ProfessionalServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div
        className={styles.background}
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subTitle}>WHAT WE DO</span>
          <h2 className={styles.title}>
            Professional Security{" "}
            <span className={styles.highlight}>Services</span>
          </h2>
          <p className={styles.description}>
            We offer a comprehensive range of facility management and security
            solutions designed to protect your assets and streamline your
            operations.
          </p>
        </div>

        <div className={styles.grid}>
          {/* ✅ Now mapping from the shared servicesData file */}
          {servicesData.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.cardImage}
                />
                <div className={styles.iconOverlay}>
                  <ArrowRight size={20} className={styles.arrowIcon} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                {/* Ensure your data file has a 'description' field, or use 'shortDesc' if that's what you named it */}
                <p className={styles.cardDesc}>{service.description}</p>

                {/* Dynamically linking to the service detail page using the ID */}
                <Link
                  to={`/services/${service.id}`}
                  className={styles.readMore}
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalServices;
