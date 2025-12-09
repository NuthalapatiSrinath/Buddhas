import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What types of security services do you provide?",
    answer:
      "We offer a comprehensive range of security solutions including Manned Guarding, Armed Security, Corporate Protection, Event Security, and Electronic Surveillance tailored to your specific needs.",
  },
  {
    question: "Are your security personnel trained and certified?",
    answer:
      "Yes, all our security professionals undergo rigorous training and verification processes. We ensure they are certified and equipped to handle various security challenges effectively.",
  },
  {
    question: "Do you offer services other than security?",
    answer:
      "Absolutely. We provide end-to-end facility management services including Housekeeping, Help Desk Management, Technical Services (Plumbing/Electrical), and Garden Maintenance.",
  },
  {
    question: "Which locations do you operate in?",
    answer:
      "Our primary operations are based in Bangalore and Hyderabad. However, we have a nationwide operational reach to serve clients across different states in India.",
  },
  {
    question: "How can I request a quote for my business?",
    answer:
      "You can easily request a quote by contacting us via our 'Connect With Us' section, calling our support numbers, or sending an email to enquiry@nsfindiasecurity.com.",
  },
];

const FAQSection = () => {
  // State to track which FAQ is currently open (null means all closed)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>COMMON QUESTIONS</span>
          <h2 className={styles.title}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <p className={styles.description}>
            Find answers to the most common questions about our security and
            facility management services.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionWrapper}>
                <h3 className={styles.question}>{faq.question}</h3>
                <span className={styles.iconWrapper}>
                  {activeIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </span>
              </div>
              <div
                className={styles.answerWrapper}
                style={{
                  maxHeight: activeIndex === index ? "150px" : "0",
                }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
