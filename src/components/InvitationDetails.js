import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const InvitationDetails = () => {
  return (
    <div className="invitation-details" style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
      fontFamily: "'Playfair Display', serif",
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      <motion.section 
      id="home" 
      className="bg-light position-relative overflow-hidden p-0 m-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(135,206,235,0.2)', // Soft blue shadow
        background: 'rgba(255,255,255,0.95)'
      }}
    >
        <div
          className="position-absolute opacity-25 top-50 start-50 translate-middle bg-cover-home"
          style={{
            backgroundImage: "url('/src/assets/images/bg-flowers.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            filter: 'blur(2px)',
            opacity: '0.15'
          }}
        />

        <motion.div 
          className="position-relative text-center p-4"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backdropFilter: 'blur(5px)'
          }}
        >
            <motion.h1 
              className="font-esthetic my-4 fw-medium" 
              style={{ 
                fontSize: "2.5rem",
                color: '#4682B4', // Steel blue
                textShadow: '2px 2px 4px rgba(135,206,235,0.2)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              Undangan Pernikahan
            </motion.h1>

            <motion.div className="position-relative d-inline-block">
            <motion.img
                src={bgImage}
                alt="Fathin & Fridha"
                className="rounded-circle border border-3 border-light shadow my-4"
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 5px 15px rgba(135,206,235,0.3)'
                }}
                whileHover={{ scale: 1.1 }}
            />
            </motion.div>

            <motion.h2 
              className="font-esthetic my-4" 
              style={{ 
                fontSize: "2.5rem",
                color: '#5F9EA0', // Cadet blue
                fontWeight: '600',
                letterSpacing: '2px'
              }}
              whileHover={{ scale: 1.05 }}
            >
              Fathin &amp; Fridha
            </motion.h2>

            <motion.div className="position-relative">
              <motion.p 
                className="my-2" 
                style={{ 
                  fontSize: "1.25rem",
                  color: '#778899', // Light slate gray
                  fontStyle: 'italic'
                }}
              >
                Sabtu, 01 Februari 2025
              </motion.p>
            </motion.div>

            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Fathin%20and%20Fridha&details=The%20Wedding%20of%20Fathin%20and%20Fridha%20%7C%2001%20Februari%202025%20%7C%20Pd.%20Aren,%20Kec.%20Pd.%20Aren,%20Kota%20Tangerang%20Selatan,%20Banten%2015224%20%7C%2010.00%20-%2011.00%20WIB&dates=20250201T100000/20250201T110000&location=https://goo.gl/maps/ALZR6FJZU3kxVwN86" target="_blank" className="btn btn-outline-light btn-sm rounded-pill shadow mb-2 px-3" style={{ backgroundColor: '#B0E0E6' }}>
                {/* <i className="fa-solid fa-map-location-dot me-2"></i>Lihat Google Maps */}
                <button style={{
                background: '#87CEEB',
                color: 'white',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                }}> <FontAwesomeIcon icon={faCalendarCheck} className="me-2" /> <span>Save The Date</span></button>
            </a>

            <motion.div
                className="d-flex justify-content-center align-items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                style={{
                width: "100%",
                maxWidth: "100%", // Membatasi lebar elemen
                textAlign: "center",
                }}
            >
                <div
                className="mouse-animation border border-2 rounded-5 px-2 py-2"
                style={{
                    borderColor: "#B0E0E6",
                    width: "24px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    boxShadow: "0 2px 10px rgba(176,224,230,0.3)", // Menambahkan bayangan untuk memberikan efek 3D
                    margin: "auto", // Menyesuaikan posisi ke tengah
                }}
                >
                <motion.div
                    className="scroll-animation rounded-4"
                    style={{
                    background: "linear-gradient(180deg, #87CEEB, #B0E0E6)", // Menyesuaikan warna dengan dominasi soft blue
                    width: "4px",
                    height: "8px",
                    boxShadow: "0 0 5px rgba(135,206,235,0.5)", // Menambahkan bayangan untuk memberikan efek 3D
                    }}
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
                </div>
            </motion.div>

            <motion.p 
              className="m-0 p-0" 
              style={{ 
                fontSize: "0.95rem",
                color: '#4682B4',
                fontWeight: '500'
              }}
            >
              Scroll Down
            </motion.p>
        </motion.div>
    </motion.section>
    </div>
  );
};

export default InvitationDetails;
