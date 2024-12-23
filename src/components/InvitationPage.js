import React from "react";
import { motion } from "framer-motion";
import "../styles.css";
import bgImage from "../assets/images/bg.png";

const InvitationPage = ({ onOpen }) => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to") || "Tamu Undangan";

  return (
    <motion.div
      className="invitation-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="invitation-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="image-container">
          <img src={bgImage} alt="Couple" aria-label="Image of a couple" />
        </div>
        <h2 className="invitation-title">The Wedding of</h2>
        <h1 className="invitation-couple">Fathin & Fridha</h1>
        <p className="invitation-text">Kepada Bapak/Ibu/Saudara/i</p>
        <strong className="guest-name">{guestName}</strong>
        <p className="invitation-text">Di tempat</p>
        <button className="invitation-button" onClick={onOpen}>
          Buka Undangan
        </button>
        <p className="invitation-footer">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </motion.div>
    </motion.div>
  );
};

export default InvitationPage;
