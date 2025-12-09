import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ServiceCarousel.module.css";

// Reusing the exact data from your ProfessionalServices component
const services = [
  {
    id: 1,
    title: "Security Services",
    description:
      "Manned guarding, armed security, and corporate protection services.",
    image: "/images/professionalsecurityservices/1.webp",
    link: "/service/security-services",
  },
  {
    id: 2,
    title: "House Keeping",
    description:
      "Professional cleaning and facility maintenance ensuring a hygienic environment.",
    image: "/images/professionalsecurityservices/2.webp",
    link: "/service/house-keeping",
  },
  {
    id: 3,
    title: "Help Desk Service",
    description: "Efficient front-office management and concierge services.",
    image: "/images/professionalsecurityservices/3.webp",
    link: "/service/help-desk-service",
  },
  {
    id: 4,
    title: "Technical Services",
    description: "Expert plumbing, electrical, and maintenance solutions.",
    image: "/images/professionalsecurityservices/4.webp",
    link: "/service/technical-services",
  },
  {
    id: 5,
    title: "Event Security",
    description: "Crowd management and VIP protection for corporate events.",
    image: "/images/professionalsecurityservices/5.webp",
    link: "/service/event-security",
  },
  {
    id: 6,
    title: "Fire Safety",
    description: "Certified fire safety officers and audit services.",
    image: "/images/professionalsecurityservices/6.webp",
    link: "/service/fire-safety",
  },
  {
    id: 7,
    title: "Dog Squad",
    description: "Highly trained K9 units for detection and tracking.",
    image: "/images/professionalsecurityservices/7.webp",
    link: "/service/dog-squad",
  },
  {
    id: 8,
    title: "Electronic Surveillance",
    description: "CCTV monitoring and advanced access control systems.",
    image: "/images/professionalsecurityservices/8.webp",
    link: "/service/electronic-surveillance",
  },
  {
    id: 9,
    title: "Cash Management",
    description: "Secure logistics for cash-in-transit and ATM replenishment.",
    image: "/images/professionalsecurityservices/9.webp",
    link: "/service/cash-management",
  },
  {
    id: 10,
    title: "Investigation Services",
    description: "Corporate fraud investigation and background verification.",
    image: "/images/professionalsecurityservices/10.webp",
    link: "/service/investigation-services",
  },
  {
    id: 11,
    title: "Pantry Services",
    description: "Hygiene-focused pantry management and hospitality staff.",
    image: "/images/professionalsecurityservices/11.webp",
    link: "/service/pantry-services",
  },
  {
    id: 12,
    title: "Garden Maintenance",
    description: "Landscaping and gardening services for green premises.",
    image: "/images/professionalsecurityservices/12.webp",
    link: "/service/garden-maintenance",
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items

  // Adjust items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic: Move 1 by 1 every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Fixed time interval (3 seconds)
    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <section className={styles.carouselSection}>
      {/* Background from existing design */}
      <div
        className={styles.background}
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      >
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        {/* Header - Same as in image/ProfessionalServices */}
        <div className={styles.header}>
          <span className={styles.subTitle}>WHAT WE DO</span>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Services</span>
          </h2>
          <p className={styles.description}>
            We offer a comprehensive range of facility management and security
            solutions designed to protect your assets and streamline your
            operations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className={styles.carouselWrapper}>
          <div className={styles.viewport}>
            <motion.div
              className={styles.track}
              animate={{
                x: `-${currentIndex * (100 / itemsToShow)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className={styles.cardItem}
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <div className={styles.card}>
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
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <button className={styles.prevBtn} onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          <button className={styles.nextBtn} onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
