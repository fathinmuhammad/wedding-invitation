import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.png";

const InvitationPage = ({ onOpen }) => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to") || "Tamu Undangan";

  return (
    <motion.div
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
        <motion.img 
              src={bgImage} 
              alt="Couple" 
              className="profile-img" 
              initial={{ scale: 0 }} 
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
          />
        {/* <motion.div
          className="image-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img 
              src={bgImage} 
              alt="Couple" 
              className="profile-img" 
              initial={{ scale: 0 }} 
              animate={{
                scale: [1, 1.1, 1], // Animasi maju mundur
              }}
              transition={{
                repeat: Infinity, // Animasi berulang
                duration: 1.5,    // Durasi animasi
                ease: "easeInOut" // Efek halus saat animasi
              }}
          />
        </motion.div> */}
        <h2 className="invitation-title">THE WEDDING OF</h2>
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
