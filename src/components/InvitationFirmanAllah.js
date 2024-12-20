import React from "react";
import { motion } from "framer-motion";

const InvitationFirmanAllah = () => {
  return (
    <div className="invitation-firman-Allah" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        
        <motion.section
          className="bg-light pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
            fontFamily: "'Playfair Display', serif",
            padding: '2rem 1rem',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
            <div className="container text-center">
                <motion.h2
                  className="font-esthetic py-2 m-0"
                  style={{ fontSize: '2rem', color: '#4682B4' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Allah Subhanahu Wa Ta'ala berfirman
                </motion.h2>

                <motion.div
                  className="bg-theme-dark mt-4 p-3 shadow rounded-4 mb-10" // Tambahkan margin bottom untuk memberikan jarak
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '20px',
                    border: '1px solid rgba(135,206,235,0.3)',
                    boxShadow: '0 10px 30px rgba(135,206,235,0.2)'
                  }}
                >
                    <motion.p
                      className="p-1 mb-3"
                      style={{ fontSize: '0.95rem', color: '#778899' }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).
                    </motion.p>
                    <motion.a
                      className="m-0 p-0 text-dark link-offset-2"
                      target="_blank"
                      href="https://quran.com/id/51/49"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      style={{ color: '#5F9EA0' }}
                    >
                      QS. Adh-Dhariyat: 49
                    </motion.a>
                </motion.div>

                <motion.div
                  className="bg-theme-dark mt-10 p-3 shadow rounded-4 mb-4" // Tambahkan margin bottom untuk memberikan jarak
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '20px',
                    border: '1px solid rgba(135,206,235,0.3)',
                    boxShadow: '0 10px 30px rgba(135,206,235,0.2)'
                  }}
                >
                    <motion.p
                      className="p-1 mb-3"
                      style={{ fontSize: '0.95rem', color: '#778899' }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      dan sesungguhnya Dialah yang menciptakan pasangan laki-laki dan perempuan,
                    </motion.p>
                    <motion.a
                      className="m-0 p-0 text-dark link-offset-2"
                      target="_blank"
                      href="https://quran.com/id/53/45"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      style={{ color: '#5F9EA0' }}
                    >
                      QS. An-Najm: 45
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    
    </div>
  );
};

export default InvitationFirmanAllah;