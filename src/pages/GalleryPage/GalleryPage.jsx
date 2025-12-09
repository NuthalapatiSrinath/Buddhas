import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { openModal } from "../../redux/slices/modalSlice";
import { ZoomIn, PlayCircle, PartyPopper, Mic2, Activity } from "lucide-react";
import styles from "./GalleryPage.module.css";
import ConnectToUs from "../../components/ConnectToUs/ConnectToUs";

// Sample Data
const galleryData = [
  {
    id: 1,
    category: "Events",
    src: "/images/professionalsecurityservices/5.webp",
  },
  {
    id: 2,
    category: "VIP Protection",
    src: "/images/professionalsecurityservices/1.webp",
  },
  {
    id: 3,
    category: "Functions",
    src: "/images/professionalsecurityservices/3.webp",
  },
  {
    id: 4,
    category: "Crowd Control",
    src: "/images/professionalsecurityservices/7.webp",
  },
  {
    id: 5,
    category: "Events",
    src: "/images/professionalsecurityservices/2.webp",
  },
  {
    id: 6,
    category: "Fire Safety",
    src: "/images/professionalsecurityservices/6.webp",
  },
  {
    id: 7,
    category: "Valet",
    src: "/images/professionalsecurityservices/4.webp",
  },
  {
    id: 8,
    category: "Surveillance",
    src: "/images/professionalsecurityservices/8.webp",
  },
  {
    id: 9,
    category: "Cash Mgmt",
    src: "/images/professionalsecurityservices/9.webp",
  },
  {
    id: 10,
    category: "Celebrations",
    src: "/images/professionalsecurityservices/12.webp",
  },
  {
    id: 11,
    category: "Functions",
    src: "/images/professionalsecurityservices/11.webp",
  },
  {
    id: 12,
    category: "VIP Protection",
    src: "/images/professionalsecurityservices/10.webp",
  },
];

const categories = [
  "All",
  "Events",
  "Functions",
  "VIP Protection",
  "Crowd Control",
  "Fire Safety",
  "Surveillance",
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();

  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  const handleImageClick = (image) => {
    dispatch(
      openModal({
        type: "IMAGE_PREVIEW",
        modalData: { src: image.src, category: image.category },
      })
    );
  };

  return (
    <div className={styles.page}>
      {/* 1. Gradient Header (No Image) */}
      <section className={styles.header}>
        <div className={styles.overlay}></div>
        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Our Gallery</h1>
          <p className={styles.breadcrumb}>
            We build trust, ensure safety, and deliver smart solutions through
            innovation, discipline, and professional excellence.
          </p>
        </motion.div>
      </section>

      <div className={styles.container}>
        {/* 2. Filter Buttons */}
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Image Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={styles.imageCard}
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className={styles.img}
                />
                <div className={styles.cardOverlay}>
                  <ZoomIn size={32} color="white" />
                  <span className={styles.overlayText}>{image.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 4. Operational Highlights */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className={styles.subTitle}>WHY BUDDHAS4?</span>
            <h2 className={styles.sectionTitle}>
              Securing Your <span className={styles.highlight}>Moments</span>
            </h2>
            <p className={styles.sectionDesc}>
              Whether it's a corporate gala, a wedding, or a large public
              gathering, our team ensures your event runs smoothly.
            </p>
          </motion.div>

          <div className={styles.highlightGrid}>
            {[
              {
                icon: <PartyPopper size={32} />,
                title: "Event Management",
                desc: "Seamless coordination with event planners.",
                img: "/images/professionalsecurityservices/5.webp",
              },
              {
                icon: <Mic2 size={32} />,
                title: "VIP Protocols",
                desc: "Specialized protection for dignitaries and hosts.",
                img: "/images/professionalsecurityservices/1.webp",
              },
              {
                icon: <Activity size={32} />,
                title: "Crowd Monitoring",
                desc: "Advanced surveillance for large gatherings.",
                img: "/images/professionalsecurityservices/8.webp",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.highlightCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.highlightImgWrapper}>
                  {/* Note: User keeps images for content cards, just not backgrounds */}
                  <img src={item.img} alt={item.title} />
                  <div className={styles.highlightIcon}>{item.icon}</div>
                </div>
                <div className={styles.highlightContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Video Section (Gradient Background) */}
      <motion.section
        className={styles.videoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className={styles.videoContent}>
          <h2>The Buddhas4 Promise</h2>
          <p>
            Watch how we bring calm, vigilance, and safety to every function we
            protect.
          </p>
          <button className={styles.playBtn}>
            <PlayCircle size={60} fill="white" className={styles.playIcon} />
          </button>
        </div>
      </motion.section>

      {/* 6. Footer Call to Action */}
      <ConnectToUs />
    </div>
  );
};

export default GalleryPage;
