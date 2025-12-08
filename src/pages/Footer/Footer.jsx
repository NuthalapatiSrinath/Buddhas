import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Heart,
} from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
  // Helper to remove spaces/symbols for tel: links
  const cleanPhone = (phone) => phone.replace(/[^0-9+]/g, "");

  // Standard Google Maps Search URL
  const getMapLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;

  const address1 =
    "689, 1st Floor, Sai Residency, Varthur Main Road, Bangalore, India, 560087";
  const address2 = "6-3-1090/C/102, Lovelyhomes, Somajiguda, Hyderabad 500082";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Column 1: Logo & About */}
          <div className={styles.logoColumn}>
            {/* Loading logo from public folder */}
            <img
              src="/logo.webp"
              alt="NSF India Security"
              className={styles.logoImage}
            />
            <p className={styles.description}>
              industroz Industry has very good strength in innovative technology
              and tools with over 35 years of experience.
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialIcon} ${styles.fb}`}
                aria-label="Facebook"
              >
                <Facebook size={18} fill="white" strokeWidth={0} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialIcon} ${styles.insta}`}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialIcon} ${styles.yt}`}
                aria-label="YouTube"
              >
                <Youtube size={18} fill="white" strokeWidth={0} />
              </a>
              <a
                href="https://wa.me/918686818384"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialIcon} ${styles.google}`}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} fill="white" strokeWidth={0} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Links (Clickable/Redirectable) */}
          <div>
            <h3 className={styles.columnTitle}>Our Links</h3>
            <ul className={styles.linkList}>
              {[
                "Home",
                "About",
                "Service",
                "Gallery",
                "Blog",
                "Contact Us",
              ].map((link) => {
                const path =
                  link === "Home"
                    ? "/"
                    : `/${link.toLowerCase().replace(" ", "-")}`;
                return (
                  <li key={link}>
                    <ChevronRight size={16} strokeWidth={3} />
                    <Link to={path}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Our Services (Display Only / Non-Redirectable) */}
          <div>
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.serviceList}>
              {[
                "Security Services",
                "House Keeping",
                "Help Desk Service",
                "First Aid Services",
                "Plumbing and Electrical Solutions",
                "Security Management System",
              ].map((service) => (
                <li key={service}>
                  <ChevronRight size={16} strokeWidth={3} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address (Interactive Maps/Phone/Mail) */}
          <div>
            <h3 className={styles.columnTitle}>Address</h3>
            <ul className={styles.contactList}>
              {/* Address 1 */}
              <li>
                <MapPin size={20} className={styles.icon} />
                <a
                  href={getMapLink(address1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {address1}
                </a>
              </li>
              {/* Address 2 */}
              <li>
                <MapPin size={20} className={styles.icon} />
                <a
                  href={getMapLink(address2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {address2}
                </a>
              </li>
              {/* Email */}
              <li>
                <Mail size={18} className={styles.icon} />
                <a
                  href="mailto:enquiry@nsfindiasecurity.com"
                  className={styles.contactLink}
                >
                  enquiry@nsfindiasecurity.com
                </a>
              </li>
              {/* Phone 1 */}
              <li>
                <Phone size={18} className={styles.icon} />
                <a
                  href={`tel:${cleanPhone("+91 91487 77937")}`}
                  className={styles.contactLink}
                >
                  +91 91487 77937
                </a>
              </li>
              {/* Phone 2 */}
              <li>
                <Phone size={18} className={styles.icon} />
                <a
                  href={`tel:${cleanPhone("+91 91135 96553")}`}
                  className={styles.contactLink}
                >
                  +91 91135 96553
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom Section */}
        <div className={styles.bottomBar}>
          <span>Copyright © 2025 NSF India Security Pvt. Ltd.</span>
          <span className={styles.designCredit}>
            Design by Panacea IT Services Pvt. Ltd
            <Heart
              size={14}
              fill="#ff4757"
              strokeWidth={0}
              className={styles.heart}
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
