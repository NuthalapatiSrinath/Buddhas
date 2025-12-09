import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import styles from "./ConnectToUs.module.css";

const ConnectToUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header - Consistent with other sections */}
        <div className={styles.header}>
          <span className={styles.subTitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>
            Connect With <span className={styles.highlight}>Us</span>
          </h2>
          <p className={styles.description}>
            Have questions or need a custom security solution? Reach out to our
            expert team.
          </p>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Column: Contact Info */}
          <div className={styles.infoColumn}>
            {/* Card 1: Head Office */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Bangalore Office</h4>
                <p className={styles.infoText}>
                  689, 1st Floor, Sai Residency, Varthur Main Road, Bangalore,
                  560087
                </p>
              </div>
            </div>

            {/* Card 2: Branch Office */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Hyderabad Office</h4>
                <p className={styles.infoText}>
                  6-3-1090/C/102, Lovelyhomes, Somajiguda, Hyderabad 500082
                </p>
              </div>
            </div>

            {/* Card 3: Phones */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Call Us</h4>
                <p className={styles.infoText}>
                  <a href="tel:+919148777937">+91 91487 77937</a> <br />
                  <a href="tel:+919113596553">+91 91135 96553</a>
                </p>
              </div>
            </div>

            {/* Card 4: Email */}
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div>
                <h4 className={styles.infoTitle}>Email Us</h4>
                <p className={styles.infoText}>
                  <a href="mailto:enquiry@nsfindiasecurity.com">
                    enquiry@Buddhas4indiasecurity.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className={styles.formColumn}>
            <form className={styles.form}>
              <h3 className={styles.formTitle}>Send us a Message</h3>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Subject"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className={styles.textarea}
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={18} className={styles.btnIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectToUs;
