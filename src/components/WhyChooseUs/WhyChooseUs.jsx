import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const features = [
  "We're providing a professional security service.",
  "We are always ready to protect your property.",
  "We have a team of professionals.",
  "We have more than 35 years of experience.",
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* --- Left Column: Content --- */}
        <div className={styles.contentWrapper}>
          <span className={styles.subTitle}>WHY CHOOSE US</span>
          <h2 className={styles.title}>
            We Provide The Best <br /> Security Solution
          </h2>
          <p className={styles.description}>
            We combine state-of-the-art technology with highly trained
            professionals to deliver unmatched security solutions. Trust us to
            protect what matters most to you with unwavering dedication and
            expertise.
          </p>

          <ul className={styles.featureList}>
            {features.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <div className={styles.checkIcon}>
                  <Check size={18} strokeWidth={3} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link to="/contact" className={styles.btn}>
            Discover More <ArrowRight size={18} className={styles.btnArrow} />
          </Link>
        </div>

        {/* --- Right Column: Images --- */}
        <div className={styles.imagesWrapper}>
          {/* The light blue background shape layer */}
          <div className={styles.bgShape}></div>

          {/* Main large image */}
          <div className={styles.mainImageContainer}>
            <img
              src="/images/whychoose/2.webp"
              alt="Professional Security Manager"
              className={styles.imgCover}
            />
          </div>

          {/* Circular overlapping image */}
          <div className={styles.circularImageContainer}>
            <img
              src="/images/whychoose/1.webp"
              alt="Security Guard on Duty"
              className={styles.imgCover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
