import React from "react";
import { motion } from "framer-motion";
import styles from "./ImageMarquee.module.css";

// We use the 12 images from your professional services folder
const images = [
  "/images/professionalsecurityservices/1.webp",
  "/images/professionalsecurityservices/2.webp",
  "/images/professionalsecurityservices/3.webp",
  "/images/professionalsecurityservices/4.webp",
  "/images/professionalsecurityservices/5.webp",
  "/images/professionalsecurityservices/6.webp",
  "/images/professionalsecurityservices/7.webp",
  "/images/professionalsecurityservices/8.webp",
  "/images/professionalsecurityservices/9.webp",
  "/images/professionalsecurityservices/10.webp",
  "/images/professionalsecurityservices/11.webp",
  "/images/professionalsecurityservices/12.webp",
];

const ImageMarquee = () => {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.titleWrapper}>
        <h3>Our Gallery</h3>
      </div>

      <div className={styles.marqueeContainer}>
        {/* We render the image list TWICE. 
          This creates the illusion of an infinite loop. 
          When the first set finishes scrolling, the second set is exactly where the first started.
        */}
        <motion.div
          className={styles.track}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20, // Adjust speed: higher = slower
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First Set */}
          {images.map((src, index) => (
            <div className={styles.imageCard} key={`a-${index}`}>
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}

          {/* Second Set (Duplicate for loop) */}
          {images.map((src, index) => (
            <div className={styles.imageCard} key={`b-${index}`}>
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageMarquee;
