import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Award } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    id: 1,
    label: "Years of Experience",
    value: "35+", // Extracted from WhyChooseUs.jsx
    icon: <Clock size={40} />,
  },
  {
    id: 2,
    label: "Security Personnel",
    value: "1500+",
    icon: <Users size={40} />,
  },
  {
    id: 3,
    label: "Satisfied Clients",
    value: "500+",
    icon: <ShieldCheck size={40} />,
  },
  {
    id: 4,
    label: "Awards Won",
    value: "25+",
    icon: <Award size={40} />,
  },
];

const StatsSection = () => {
  return (
    <section className={styles.section}>
      {/* Parallax-like Background */}
      <div
        className={styles.background}
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      >
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{stat.icon}</div>
              <h3 className={styles.value}>{stat.value}</h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
