import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styles from "./ProfessionalServices.module.css";

const services = [
  {
    id: 1,
    title: "Security Services",
    description:
      "Manned guarding, armed security, and corporate protection services tailored to your needs.",
    image: "/images/professionalsecurityservices/1.webp",
    link: "/service/security-services",
  },
  {
    id: 2,
    title: "House Keeping",
    description:
      "Professional cleaning and facility maintenance ensuring a hygienic and organized environment.",
    image: "/images/professionalsecurityservices/2.webp",
    link: "/service/house-keeping",
  },
  {
    id: 3,
    title: "Help Desk Service",
    description:
      "Efficient front-office management and concierge services to handle your visitors and calls.",
    image: "/images/professionalsecurityservices/3.webp",
    link: "/service/help-desk-service",
  },
  {
    id: 4,
    title: "Technical Services",
    description:
      "Expert plumbing, electrical, and maintenance solutions for uninterrupted operations.",
    image: "/images/professionalsecurityservices/4.webp",
    link: "/service/technical-services",
  },
  {
    id: 5,
    title: "Event Security",
    description:
      "Crowd management and VIP protection for corporate events, concerts, and private functions.",
    image: "/images/professionalsecurityservices/5.webp",
    link: "/service/event-security",
  },
  {
    id: 6,
    title: "Fire Safety",
    description:
      "Certified fire safety officers and audit services to ensure your premises are compliant and safe.",
    image: "/images/professionalsecurityservices/6.webp",
    link: "/service/fire-safety",
  },
  {
    id: 7,
    title: "Dog Squad",
    description:
      "Highly trained K9 units for detection, tracking, and patrolling high-risk perimeters.",
    image: "/images/professionalsecurityservices/7.webp",
    link: "/service/dog-squad",
  },
  {
    id: 8,
    title: "Electronic Surveillance",
    description:
      "CCTV monitoring and advanced access control systems for 24/7 digital security.",
    image: "/images/professionalsecurityservices/8.webp",
    link: "/service/electronic-surveillance",
  },
  {
    id: 9,
    title: "Cash Management",
    description:
      "Secure logistics for cash-in-transit and ATM replenishment services.",
    image: "/images/professionalsecurityservices/9.webp",
    link: "/service/cash-management",
  },
  {
    id: 10,
    title: "Investigation Services",
    description:
      "Corporate fraud investigation, background verification, and risk assessment.",
    image: "/images/professionalsecurityservices/10.webp",
    link: "/service/investigation-services",
  },
  {
    id: 11,
    title: "Pantry Services",
    description:
      "Hygiene-focused pantry management and hospitality staff for corporate offices.",
    image: "/images/professionalsecurityservices/11.webp",
    link: "/service/pantry-services",
  },
  {
    id: 12,
    title: "Garden Maintenance",
    description:
      "Landscaping and gardening services to keep your premises green and welcoming.",
    image: "/images/professionalsecurityservices/12.webp",
    link: "/service/garden-maintenance",
  },
];

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
          {services.map((service) => (
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
                <p className={styles.cardDesc}>{service.description}</p>
                <Link to={service.link} className={styles.readMore}>
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
