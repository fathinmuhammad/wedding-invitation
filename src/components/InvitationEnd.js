import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.png";

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
                style={{ fontSize: "2rem" }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                Wassalamualaikum Warahmatullahi Wabarakatuh
                </motion.h2>
                <motion.h2 
                className="font-arabic pt-4" 
                style={{ fontSize: "2rem" }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
                >
                اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
                </motion.h2>

                <motion.img
                src={bgImage}
                alt="Fathin & Fridha"
                className="rounded-circle border border-3 border-light shadow my-4"
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '3px solid #B0E0E6',
                    boxShadow: '0 5px 15px rgba(135,206,235,0.3)'
                }}
                whileHover={{ scale: 1.1 }}
            />
               
            </div>
        </motion.section>
    </div>
  );
};

export default InvitationEnd;