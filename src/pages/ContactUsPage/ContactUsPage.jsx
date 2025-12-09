import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* --- 1. Hero Header --- */}
      <section
        className={styles.pageHeader}
        style={{ backgroundImage: "url('/images/contact.webp')" }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.breadcrumb}>
            We build trust, ensure safety, and deliver smart solutions through
            innovation, discipline, and professional excellence
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* --- 2. LEFT SIDE DETAILS (Contact Info) --- */}
          <div className={styles.leftSide}>
            <span className={styles.subHeading}>GET IN TOUCH</span>
            <h2 className={styles.mainHeading}>
              Visit One of Our{" "}
              <span className={styles.highlight}>Agency Locations</span> or
              Contact Us Today
            </h2>
            <p className={styles.description}>
              We provide professional security and facility management services
              across India. Reach out to us for a custom quote or any queries.
            </p>

            <div className={styles.detailsList}>
              {/* Head Office */}
              <div className={styles.detailCard}>
                <div className={styles.iconBox}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Head Office</h4>
                  <p className={styles.detailText}>
                    689, 1st Floor, Sai Residency, Varthur Main Road, <br />
                    Bangalore, India, 560087
                  </p>
                </div>
              </div>

              {/* Branch Office */}
              <div className={styles.detailCard}>
                <div className={styles.iconBox}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Branch Office</h4>
                  <p className={styles.detailText}>
                    6-3-1090/C/102, Lovelyhomes, Somajiguda, <br />
                    Hyderabad, 500082
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className={styles.detailCard}>
                <div className={styles.iconBox}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Phone Number</h4>
                  <p className={styles.detailText}>
                    <a href="tel:+919148777937">+91 91487 77937</a>
                  </p>
                  <p className={styles.detailText}>
                    <a href="tel:+919113596553">+91 91135 96553</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className={styles.detailCard}>
                <div className={styles.iconBox}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Email Address</h4>
                  <p className={styles.detailText}>
                    <a href="mailto:enquiry@nsfindiasecurity.com">
                      enquiry@nsfindiasecurity.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className={styles.detailCard}>
                <div className={styles.iconBox}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Working Hours</h4>
                  <p className={styles.detailText}>
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- 3. RIGHT SIDE (Contact Form) --- */}
          <div className={styles.rightSide}>
            <form className={styles.contactForm}>
              <h3 className={styles.formTitle}>Send Us a Message</h3>

              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="tel" placeholder="Phone Number" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <input type="text" placeholder="Subject" />
              </div>

              <div className={styles.inputGroup}>
                <textarea rows="5" placeholder="Message" required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- 4. MAP SECTION --- */}
      <div className={styles.mapSection}>
        <iframe
          title="NSF India Security Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003666579738!2d77.71123491482194!3d12.97160799085585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d259c1b%3A0x6a04e5714004033!2sVarthur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677761122342!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
