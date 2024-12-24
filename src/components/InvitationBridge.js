import React from "react";
import { motion } from "framer-motion";
import cowok from "../assets/images/cowok.png";
import cewek from "../assets/images/cewek.png";

const InvitationBridge = () => {
  return (
    <div className="invitation-wedding-date" style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))',
      fontFamily: "'Playfair Display', serif",
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      color: '#333',
      boxShadow: '0 10px 30px rgba(135,206,235,0.2)'
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
        alignItems: 'center',
        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
        borderRadius: '10px',
        margin: '20px 0'
      }}
    >
      {/* <motion.div
        className="card shadow-lg p-5 mx-auto"
        style={{
          maxWidth: 'auto',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '20px',
          border: '1px solid rgba(135,206,235,0.3)',
          boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
          margin: '20px 0'
        }}
      > */}
        <motion.h2
          className="font-arabic py-4 m-0"
          style={{ 
            fontSize: "1.35rem",
            color: '#1762ad',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            marginBottom: '0rem'
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
            fontSize: "0.8rem",
            color: '#5F9EA0',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '0rem'
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
            fontSize: "0.8rem",
            color: '#778899',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            textAlign: 'justify'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami:
        </motion.p>

        {/* <div className="overflow-x-hidden pb-8"> */}
          {/* <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          > */}
            <motion.img
              src={cowok}
              alt="cowo"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
                
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="m-0"
              style={{ 
                fontSize: "2rem",
                color: '#1762ad',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem'
              }}
            >
              Fathin Muhammad Fadhlullah, S.Kom
            </motion.h2>
            <motion.p
              style={{ 
                fontSize: "1.3rem",
                color: '#5F9EA0',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putra pertama
            </motion.p>
            <motion.p 
              style={{color: '#778899', fontFamily: "'Poppins', sans-serif", textShadow: '0 1px 2px rgba(0,0,0,0.1)', marginTop: "0rem", marginBottom: '0rem'}}
            >
              Bapak Mohamad Yasin dan Ibu Hikmah Isnaniyah
            </motion.p>
          {/* </motion.div> */}

          <motion.h2
            className="font-esthetic my-4"
            style={{ 
              fontSize: "2rem",
              color: '#4682B4',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 'bold',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              textAlign: 'center',
              marginBottom: '0rem',
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
              alt="cewek"
              className="rounded-circle border border-3 shadow my-4 mx-auto"
              style={{
                width: "250px",
                objectFit: "cover",
                margin: '20px 0',
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.5,   
                ease: "easeInOut"
              }}
            />
            <motion.h2
              className="font-esthetic m-0"
              style={{ 
                fontSize: "2rem",
                color: '#1762ad',
                fontFamily: "'Tangerine', serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginBottom: '0rem'
              }}
            >
              Anisa Hafridha Putri, Amd.Kes
            </motion.h2>
            <motion.p
              className="mt-3 mb-1"
              style={{ 
                fontSize: "1.3rem",
                color: '#5F9EA0',
                fontFamily: "'Poppins', sans-serif",
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                textAlign: 'center',
                marginTop: '0rem',
                fontWeight: 'bold',
                marginBottom: '0rem'
              }}
            >
              Putri pertama
            </motion.p>
            <motion.p 
              className="mb-0"
              style={{color: '#778899', fontFamily: "'Poppins', sans-serif", textShadow: '0 1px 2px rgba(0,0,0,0.1)', marginTop: "0rem", marginBottom: '0rem'}}
            >
              Bapak Agus Muhayar dan Ibu Husada Prawati
            </motion.p>
          </motion.div>
        {/* </div> */}
      {/* </motion.div> */}
    </motion.section>
    </div>
  );
};

export default InvitationBridge;