import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/images/bg.png";

const InvitationDetails = () => {
  return (
    <div className="invitation-details">
      <motion.section
        id="home"
        className="invitation-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dekorasi bunga */}
        <div className="flower-frame-top-left flower-top-left"></div>
        {/* <div className="flower-frame-top-right flower-top-right"></div> */}
        {/* <div className="flower-frame-bottom-left flower-bottom-left"></div> */}
        <div className="flower-frame-bottom-right flower-bottom-right"></div>

        <motion.div className="content">
          <motion.h1 className="title" whileHover={{ scale: 1.05 }} style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
            Wedding Invitation
          </motion.h1>

          <motion.img
            src={bgImage}
            alt="Fathin & Fridha"
            className="profile-img"
            whileHover={{ scale: 1.1 }}
          />

          <motion.h2 className="subtitle" whileHover={{ scale: 1.05 }} style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
            Fathin &amp; Fridha
          </motion.h2>

          <motion.p className="wedding-date" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
            Sabtu, 01 Februari 2025
          </motion.p>

          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Fathin%20and%20Fridha"
            target="_blank"
            className="save-date-btn"
          >
            <button style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>
              <FontAwesomeIcon icon={faCalendarCheck} className="icon" />{" "}
              <span>Save The Date</span>
            </button>
          </a>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="mouse">
              <motion.div
                className="scroll-animation"
                animate={{ y: [0, 20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.p className="scroll-text" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}>Scroll Down</motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default InvitationDetails;