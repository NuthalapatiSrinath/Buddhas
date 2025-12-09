import React, { useState, useEffect, useRef } from "react";
import styles from "./ClientsSection.module.css";

// 10 Client Logos
const clientImages = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/images/clients/${i + 1}.webp`, // Make sure you have images 1.png to 10.png
  alt: `Client ${i + 1}`,
}));

const ClientsSection = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // Number of logos visible at once
  const visibleItems = 5;

  // Clone the start of the list to the end for seamless looping
  const extendedList = [
    ...clientImages,
    ...clientImages.slice(0, visibleItems),
  ];

  const delay = 2000; // 1.5 seconds wait between moves

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Reset seamlessly when reaching the clones
  useEffect(() => {
    if (index === clientImages.length) {
      setTimeout(() => {
        setIsTransitioning(false); // Disable animation for instant jump
        setIndex(0); // Jump back to start
      }, 500); // Wait for the slide transition to finish first
    }

    if (index === 0) {
      // Re-enable animation after the jump
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [index]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subTitle}>OUR NETWORK</span>
          <h2 className={styles.title}>
            Trusted by{" "}
            <span className={styles.highlight}>Industry Leaders</span>
          </h2>
          <div className={styles.separator}></div>
        </div>

        <div className={styles.carouselViewport}>
          <div
            className={styles.track}
            style={{
              // ✅ FIXED: Calculate percentage based on TOTAL items in the track
              transform: `translateX(-${index * (100 / extendedList.length)}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              // Width must be proportional to accommodate all original + cloned items
              width: `${(extendedList.length / visibleItems) * 100}%`,
            }}
          >
            {extendedList.map((client, i) => (
              <div
                key={i}
                className={styles.logoItem}
                // Each item takes up an equal slice of the track width
                style={{ width: `${100 / extendedList.length}%` }}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
