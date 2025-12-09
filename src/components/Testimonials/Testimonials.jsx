import React from "react";
import { Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Operations Manager, TechPark",
    image: "/images/testimonials/user1.webp",
    rating: 5,
    text: "NSF India Security has completely transformed our campus safety. Their guards are well-trained, polite, and extremely vigilant. The transition was seamless.",
  },
  {
    id: 2,
    name: "Anita Desai",
    role: "Director, GreenField Housing",
    image: "/images/testimonials/user2.webp",
    rating: 5,
    text: "We have been using their housekeeping and security services for 3 years. Their quick response team is impressive, and the management is always reachable.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "CEO, BuildWell Constructions",
    image: "/images/testimonials/user3.webp",
    rating: 4,
    text: "Professionalism at its best. From the uniform to the reporting system, everything is top-notch. Highly recommended for corporate security needs.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>TESTIMONIALS</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <div className={styles.underline}></div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* Decorative Quote Icon */}
              <div className={styles.quoteIconWrapper}>
                <Quote size={40} className={styles.quoteIcon} />
              </div>

              <p className={styles.reviewText}>"{item.text}"</p>

              {/* Rating */}
              <div className={styles.stars}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <div className={styles.divider}></div>

              {/* Client Info */}
              <div className={styles.clientInfo}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.clientImg}
                />
                <div>
                  <h4 className={styles.clientName}>{item.name}</h4>
                  <span className={styles.clientRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
