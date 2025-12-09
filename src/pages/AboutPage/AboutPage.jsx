import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Shield,
  CheckCircle,
  Building2,
  Factory,
  Home,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Plane,
} from "lucide-react";
import styles from "./AboutPage.module.css";
import ConnectToUs from "../../components/ConnectToUs/ConnectToUs";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const AboutPage = () => {
  return (
    <div className={styles.page}>
      {/* 1. Page Header */}
      <section
        className={styles.pageHeader}
        style={{ backgroundImage: "url('/images/herobg.webp')" }}
      >
        <div className={styles.overlay}></div>
        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.pageTitle}>About Buddhas4</h1>
          <p className={styles.breadcrumb}>
            Redefining Security for the Modern World Forward-Thinking Protection
            for Businesses, Campuses, and Communities
          </p>
        </motion.div>
      </section>

      {/* 2. Intro Section */}
      <section className={styles.introSection}>
        <div className={`${styles.container} ${styles.introGrid}`}>
          <motion.div
            className={styles.introContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className={styles.subTitle}>WHO WE ARE</span>
            <h2 className={styles.sectionHeading}>
              Guardians of Trust Since{" "}
              <span className={styles.highlight}>1989</span>
            </h2>
            <p className={styles.introText}>
              Buddhas4 is not just a security agency; we are a legacy of
              protection built over three decades. Founded with a singular
              purpose—to create safer environments for businesses and
              communities—we have grown from a local guarding unit into a
              nationwide facility management powerhouse.
            </p>
            <p className={styles.introText}>
              We believe that true security comes from a blend of **disciplined
              manpower** and **cutting-edge technology**. Our personnel are
              trained professionals who undergo rigorous background checks,
              physical training, and soft-skills workshops.
            </p>

            <div className={styles.signatureBlock}>
              <div className={styles.signatureLine}></div>
              <p className={styles.ceoName}>Nuthalapati Srinath</p>
              <p className={styles.ceoRole}>Managing Director</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.introImageWrapper}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="/images/whychoose/2.webp"
              alt="Our Director"
              className={styles.introImage}
            />
            <motion.div
              className={styles.experienceBadge}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.years}>35+</span>
              <span className={styles.yearsText}>Years of Excellence</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission, Vision & Values */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.missionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <div className={styles.iconWrapper}>
                <Target size={32} />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardText}>
                To provide world-class security and facility management
                solutions that empower businesses to operate freely and safely.
                We strive to set new benchmarks in reliability and integrity.
              </p>
            </motion.div>

            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <div className={styles.iconWrapper}>
                <Eye size={32} />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardText}>
                To be India's most trusted partner in security and facility
                services, recognized for our innovative approach, highly trained
                personnel, and unwavering commitment to excellence.
              </p>
            </motion.div>

            <motion.div className={styles.missionCard} variants={fadeInUp}>
              <div className={styles.iconWrapper}>
                <Shield size={32} />
              </div>
              <h3 className={styles.cardTitle}>Core Values</h3>
              <ul className={styles.valuesList}>
                <li>
                  <strong>Integrity:</strong> Uncompromising ethics.
                </li>
                <li>
                  <strong>Vigilance:</strong> 24/7 alertness.
                </li>
                <li>
                  <strong>Respect:</strong> Valuing every client.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className={styles.industriesSection}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <span className={styles.subTitle}>OUR EXPERTISE</span>
            <h2 className={styles.sectionHeading}>
              Industries We <span className={styles.highlight}>Protect</span>
            </h2>
            <p className={styles.headerDesc}>
              We tailor our security protocols to meet the unique challenges of
              various sectors.
            </p>
          </div>

          <motion.div
            className={styles.industryGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Building2 />, title: "Corporate Offices" },
              { icon: <Factory />, title: "Industrial Plants" },
              { icon: <Home />, title: "Residential Complex" },
              { icon: <Stethoscope />, title: "Healthcare" },
              { icon: <ShoppingBag />, title: "Retail & Malls" },
              { icon: <GraduationCap />, title: "Educational Inst." },
              { icon: <Briefcase />, title: "Banking / Financial" },
              { icon: <Plane />, title: "Logistics & Transport" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.industryCard}
                variants={fadeInUp}
              >
                <div className={styles.indIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Our Legacy (Timeline) */}
      <section className={styles.legacySection}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <span className={styles.subTitle}>OUR JOURNEY</span>
            <h2 className={styles.sectionHeading}>
              A Legacy of <span className={styles.highlight}>Protection</span>
            </h2>
          </div>

          <div className={styles.timeline}>
            {[
              {
                year: "1989",
                title: "Inception",
                desc: "Started operations with a small team of 10 guards in Bangalore.",
              },
              {
                year: "2005",
                title: "Expansion",
                desc: "Expanded to Hyderabad and introduced Housekeeping divisions.",
              },
              {
                year: "2015",
                title: "Tech Integration",
                desc: "Adopted electronic surveillance and modern reporting apps.",
              },
              {
                year: "2025",
                title: "Nationwide Leader",
                desc: "Managing 1500+ personnel across multiple states with ISO certification.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The NSF Advantage (Methodology) */}
      <section className={styles.advantageSection}>
        <div className={`${styles.container} ${styles.advantageGrid}`}>
          <div className={styles.advantageText}>
            <span className={styles.subTitle}>WHY Buddhas4?</span>
            <h2 className={styles.sectionHeading}>
              The Buddhas4 <span className={styles.highlight}>Methodology</span>
            </h2>
            <p className={styles.introText}>
              We don't just deploy guards; we implement a security strategy. Our
              4-step process ensures total coverage.
            </p>

            <div className={styles.stepsWrapper}>
              {[
                {
                  num: "01",
                  title: "Risk Assessment",
                  text: "We analyze your site for vulnerabilities and threat points.",
                },
                {
                  num: "02",
                  title: "Strategic Planning",
                  text: "Custom SOPs designed specifically for your premises.",
                },
                {
                  num: "03",
                  title: "Deployment & Training",
                  text: "On-site briefing and deployment of vetted personnel.",
                },
                {
                  num: "04",
                  title: "Audit & Feedback",
                  text: "Regular night checks and client feedback loops.",
                },
              ].map((step, idx) => (
                <div key={idx} className={styles.stepRow}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className={styles.advantageImage}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/professionalsecurityservices/6.webp"
              alt="Security Planning"
            />
          </motion.div>
        </div>
      </section>

      {/* 7. Training & Standards */}
      <section className={styles.trainingSection}>
        <div className={`${styles.container} ${styles.trainingGrid}`}>
          <div className={styles.trainingText}>
            <span className={styles.subTitle}>OUR STANDARDS</span>
            <h2 className={styles.sectionHeading}>
              Rigorous <span className={styles.highlight}>Training Regime</span>
            </h2>
            <p className={styles.introText}>
              A uniform doesn't make a guard; training does. Every recruit
              undergoes a mandatory 30-day intensive program.
            </p>

            <div className={styles.featureGrid}>
              {[
                "Physical Fitness & Drills",
                "Fire Safety & First Aid",
                "Soft Skills & Etiquette",
                "Legal & Compliance Knowledge",
              ].map((feat, i) => (
                <div key={i} className={styles.feature}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <div>
                    <h4>{feat}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.trainingImage}>
            <img
              src="/images/professionalsecurityservices/1.webp"
              alt="Security Training"
            />
          </div>
        </div>
      </section>

      {/* 8. Leadership Team */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <span className={styles.subTitle}>LEADERSHIP</span>
            <h2 className={styles.sectionHeading}>
              Meet Our <span className={styles.highlight}>Commanders</span>
            </h2>
          </div>

          <div className={styles.teamGrid}>
            {[
              {
                img: "/images/testimonials/user1.webp",
                name: "Mr. Nuthalapati Srinath",
                role: "Managing Director",
                desc: "Visionary force with 35 years of operational excellence.",
              },
              {
                img: "/images/testimonials/user2.webp",
                name: "Director of Operations",
                role: "Operations Head",
                desc: "Ensuring seamless deployment and client satisfaction.",
              },
              {
                img: "/images/testimonials/user3.webp",
                name: "Chief Training Officer",
                role: "Training Head",
                desc: "Ex-Army personnel dedicated to discipline.",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                className={styles.teamCard}
                whileHover={{ y: -10 }}
              >
                <div className={styles.teamImgWrapper}>
                  <img src={leader.img} alt={leader.name} />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{leader.name}</h3>
                  <span>{leader.role}</span>
                  <p>{leader.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Certifications Strip */}
      <section className={styles.certSection}>
        <div className={styles.container}>
          <div className={styles.certContent}>
            <h3>Licensed & Certified</h3>
            <p>
              We adhere to strict government regulations and industry standards.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>PSARA Licensed</span>
              <span className={styles.badge}>ISO 9001:2015</span>
              <span className={styles.badge}>MSME Registered</span>
              <span className={styles.badge}>NSIC Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <ConnectToUs />
    </div>
  );
};

export default AboutPage;
