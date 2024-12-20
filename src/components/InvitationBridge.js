import React from "react";
import { motion } from "framer-motion";
import cowok from "../assets/images/cowo.png";
import cewek from "../assets/images/cewe.png";

const InvitationBridge = () => {
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
      className="text-center px-2 py-5"
      id="bride"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <motion.div
        className="card shadow-lg p-5 mx-auto"
        style={{
          maxWidth: '800px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '20px',
          border: '1px solid rgba(135,206,235,0.3)',
          boxShadow: '0 10px 30px rgba(135,206,235,0.2)'
        }}
      >
        <motion.h2
          className="font-arabic py-4 m-0"
          style={{ 
            fontSize: "2rem",
            color: '#4682B4'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.h2>

        <motion.h2
          className="font-esthetic py-4 m-0"
          style={{ 
            fontSize: "2rem",
            color: '#5F9EA0'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Assalamualaikum Warahmatullahi Wabarakatuh
        </motion.h2>

        <motion.p
          className="pb-4 m-0"
          style={{ 
            fontSize: "0.95rem",
            color: '#778899'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:
        </motion.p>

        <div className="overflow-x-hidden pb-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.img
              src={cowok}
              alt="cowo"
              className="rounded-circle border border-3 shadow my-4 mx-auto"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderColor: '#B0E0E6'
              }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.h2
              className="font-esthetic m-0"
              style={{ 
                fontSize: "2.5rem",
                color: '#4682B4'
              }}
            >
              Fathin Muhammad Fadhlullah
            </motion.h2>
            <motion.p
              className="mt-3 mb-1"
              style={{ 
                fontSize: "1.25rem",
                color: '#5F9EA0'
              }}
            >
              Putra ke-1
            </motion.p>
            <motion.p 
              className="mb-0"
              style={{color: '#778899'}}
            >
              Bapak Mohamad Yasin dan Ibu Hikmah Isnaniyah
            </motion.p>
          </motion.div>

          <motion.h2
            className="font-esthetic my-4"
            style={{ 
              fontSize: "4rem",
              color: '#4682B4'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            &amp;
          </motion.h2>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.img
              src={cewek}
              alt="cewe"
              className="rounded-circle border border-3 shadow my-4 mx-auto"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderColor: '#B0E0E6'
              }}
              whileHover={{ scale: 1.1 }}
            />
            <motion.h2
              className="font-esthetic m-0"
              style={{ 
                fontSize: "2.5rem",
                color: '#4682B4'
              }}
            >
              Anisa Hafridha Putri
            </motion.h2>
            <motion.p
              className="mt-3 mb-1"
              style={{ 
                fontSize: "1.25rem",
                color: '#5F9EA0'
              }}
            >
              Putri ke-1
            </motion.p>
            <motion.p 
              className="mb-0"
              style={{color: '#778899'}}
            >
              Bapak Agus Muhayar dan Ibu Husada Prawati
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default InvitationBridge;