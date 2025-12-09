import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Search,
  ChevronDown,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import styles from "./TopBar.module.css";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false); // For Desktop
  const [isMobileServiceExpanded, setIsMobileServiceExpanded] = useState(false); // For Mobile Accordion

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Updated Service Data to match your servicesData.js titles exactly
  // This ensures the links generated (e.g., /service/security-services) are correct.
  const serviceColumns = [
    [
      "Security Services",
      "House Keeping",
      "Help Desk Service",
      "Technical Services",
    ],
    ["Event Security", "Fire Safety", "Dog Squad", "Electronic Surveillance"],
    [
      "Cash Management",
      "Investigation Services",
      "Pantry Services",
      "Garden Maintenance",
    ],
  ];

  // Helper to flatten services for mobile list
  const mobileServices = serviceColumns.flat();

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      {/* --- Top Strip (Hidden on Mobile) --- */}
      <div className={styles.topStrip}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a
              href="mailto:enquiry@buddha4security.com" // Updated href to match text
              className={styles.infoItem}
            >
              <Mail size={15} /> enquiry@buddha4security.com
            </a>
            <span className={styles.separator}>|</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.infoItem}
            >
              <MapPin size={15} /> 689, 1st Floor, Sai Residency, Varthur Main
              Road, Bangalore, 560087
            </a>
          </div>

          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <Youtube size={15} />
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <Search size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className={styles.navbar}>
        <div className={styles.container}>
          {/* Logo */}
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Ensure you have a logo file or use the Logo component here */}
            <img
              src="/logo.webp"
              alt="Buddhas4 Security"
              className={styles.logo}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
            <Link to="/about" className={styles.navItem}>
              About
            </Link>

            {/* Service Dropdown (Desktop) */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => setIsServiceDropdownOpen(true)}
              onMouseLeave={() => setIsServiceDropdownOpen(false)}
            >
              <div className={`${styles.navItem} ${styles.dropdownTrigger}`}>
                Service{" "}
                <ChevronDown
                  size={14}
                  strokeWidth={3}
                  className={styles.chevron}
                />
              </div>

              <div
                className={`${styles.megaMenu} ${
                  isServiceDropdownOpen ? styles.show : ""
                }`}
              >
                {serviceColumns.map((col, i) => (
                  <div key={i} className={styles.menuColumn}>
                    {col.map((item) => (
                      <Link
                        key={item}
                        to={`/services/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`} // Generates slug like /service/security-services
                        className={styles.menuLink}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* <Link to="/blog" className={styles.navItem}>
              Blog
            </Link> */}
            <Link to="/gallery" className={styles.navItem}>
              Gallery
            </Link>
            <Link to="/contact" className={styles.navItem}>
              Contact us
            </Link>
          </nav>

          {/* Right Section (Button + Hamburger) */}
          <div className={styles.rightSection}>
            <Link to="/contact" className={styles.enquireBtn}>
              Enquire Now
            </Link>

            <button
              className={styles.hamburger}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {/* Overlay Background */}
      <div
        className={`${styles.mobileOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Drawer Content */}
      <div
        className={`${styles.mobileDrawer} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        {/* Drawer Header: Logo + Close Button */}
        <div className={styles.drawerHeader}>
          <img
            src="/logo.webp"
            alt="Buddhas4 Security"
            className={styles.mobileLogo}
          />
          <button
            className={styles.closeBtn}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className={styles.mobileNavLinks}>
          <Link
            to="/"
            className={styles.mobileNavItem}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={styles.mobileNavItem}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Mobile Service Accordion */}
          <div className={styles.mobileAccordion}>
            <div
              className={styles.accordionHeader}
              onClick={() =>
                setIsMobileServiceExpanded(!isMobileServiceExpanded)
              }
            >
              <span className={styles.mobileNavItem}>Service</span>
              {isMobileServiceExpanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </div>

            <div
              className={`${styles.accordionContent} ${
                isMobileServiceExpanded ? styles.expanded : ""
              }`}
            >
              {mobileServices.map((item) => (
                <Link
                  key={item}
                  to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={styles.accordionLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* <Link
            to="/blog"
            className={styles.mobileNavItem}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link> */}

          <Link
            to="/gallery"
            className={styles.mobileNavItem}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            className={styles.mobileNavItem}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
