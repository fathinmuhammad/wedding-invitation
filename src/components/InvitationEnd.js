import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg2.png";

const InvitationEnd = () => {
  return (
    <div className="invitation-bridge" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        
        <motion.section 
        className="bg-black pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <div className="container text-center">
                <p className="pb-2 pt-4" style={{ fontSize: "0.95rem" }}>Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.</p>

                <motion.h2 
                className="font-esthetic" 
                style={{ fontSize: "1rem", fontFamily: "'Poppins', sans-serif", color: '#4682B4' }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                Wassalamualaikum Warahmatullahi Wabarakatuh
                </motion.h2>
                <motion.h2 
                className="font-arabic pt-4" 
                style={{ fontSize: "1.35rem", color: '#4682B4', fontFamily: "'Cairo', sans-serif", }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
                </motion.h2>

                <motion.img
                src={bgImage}
                alt="Fathin & Fridha"
                style={{
                    width: '350px',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: [1, 1.1, 1], // Animasi maju mundur
                }}
                transition={{
                  repeat: Infinity, // Animasi berulang
                  duration: 1.5,    // Durasi animasi
                  ease: "easeInOut" // Efek halus saat animasi
                }}
            />
               
            </div>
        </motion.section>
    </div>
  );
};

export default InvitationEnd;