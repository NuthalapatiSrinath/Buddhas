import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData";
import ConnectToUs from "../../components/ConnectToUs/ConnectToUs";
import styles from "./ServiceDetailPage.module.css";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  // Find the matching service based on the URL ID
  const service = servicesData.find((s) => s.id === slug);

  // Scroll to top when the page loads or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <div className={styles.notFound}>Service Not Found</div>;
  }

  return (
    <div className={styles.page}>
      {/* 1. Header (Same as Services Page) */}
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
          {/* Dynamic Title */}
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.breadcrumb}>
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> /{" "}
            {service.title}
          </p>
        </motion.div>
      </section>

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* 2. Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.menuWidget}>
              <h3 className={styles.widgetTitle}>Other Services</h3>
              <ul className={styles.menuList}>
                {servicesData.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/services/${item.id}`}
                      className={`${styles.menuLink} ${
                        item.id === slug ? styles.active : ""
                      }`}
                    >
                      {item.title}
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box (Blue Theme) */}
            <div className={styles.contactWidget}>
              <div className={styles.iconBox}>
                <Phone size={24} />
              </div>
              <h3>Need Help?</h3>
              <p>Call us for a custom quote.</p>
              <a href="tel:+919148777937" className={styles.callBtn}>
                +91 91487 77937
              </a>
            </div>
          </aside>

          {/* 3. Main Content */}
          <main className={styles.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.mainImageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.mainImage}
                />
              </div>

              <h2 className={styles.mainTitle}>{service.title}</h2>

              <div className={styles.richText}>
                {service.fullDesc.split("\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>

              {/* Features List */}
              <div className={styles.featuresSection}>
                <h3 className={styles.subHeading}>Key Benefits</h3>
                <div className={styles.featureGrid}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <CheckCircle2 size={20} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blue CTA Banner */}
              <div className={styles.ctaBanner}>
                <h3>Ready to secure your premises?</h3>
                <p>
                  Contact us today for a specialized{" "}
                  {service.title.toLowerCase()} plan.
                </p>
                <Link to="/contact" className={styles.ctaLink}>
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      <ConnectToUs />
    </div>
  );
};

export default ServiceDetailPage;
