import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const InvitationWeddingDate = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    
    const targetDate = new Date("2025-02-01T09:00:00").getTime(); // Ganti tanggal acara Anda di sini
    
    useEffect(() => {
        const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        if (difference <= 0) {
            clearInterval(timer);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
        }
        }, 1000);
    
        return () => clearInterval(timer); // Membersihkan interval saat komponen unmount
    }, [targetDate]);

  return (
    <div className="invitation-wedding-date" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))', // Soft blue gradient
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
            <section className="bg-black pb-2" id="wedding-date">
                <div className="container text-center">
                    <motion.h2 className="font-esthetic py-4 m-0" style={{ fontSize: '2.5rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Moment Bahagia</motion.h2>
    
                    <div className="border rounded-pill shadow py-2 px-4 mt-2 mb-4 d-flex justify-content-center">
                        <div className="d-flex flex-row align-items-center gap-3">
                            <div className="text-center">
                            <motion.h2
                                className="m-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {timeLeft.days}
                            </motion.h2>
                            <small>Hari</small>
                            </div>
                            <div className="text-center">
                            <motion.h2
                                className="m-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {timeLeft.hours}
                            </motion.h2>
                            <small>Jam</small>
                            </div>
                            <div className="text-center">
                            <motion.h2
                                className="m-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {timeLeft.minutes}
                            </motion.h2>
                            <small>Menit</small>
                            </div>
                            <div className="text-center">
                            <motion.h2
                                className="m-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {timeLeft.seconds}
                            </motion.h2>
                            <small>Detik</small>
                            </div>
                        </div>
                    </div>

    
                    <motion.p className="py-2 m-0" style={{ fontSize: '0.95rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaAllah kami akan menyelenggarakan acara:</motion.p>
    
    
                    <div className="overflow-x-hidden">
                        <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Akad</motion.h2>
                            <p style={{ fontSize: '0.95rem' }}>Pukul 09.00 WIB - Selesai</p>
                        </div>
    
                        <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Resepsi</motion.h2>
                            <p style={{ fontSize: '0.95rem' }}>Pukul 11.00 WIB - Selesai</p>
                        </div>
                    </div>
    
                    <div className="py-2">
                        <a href="https://maps.app.goo.gl/YM3oyTn7xPTgpyjeA" target="_blank" className="btn btn-outline-light btn-sm rounded-pill shadow mb-2 px-3" style={{ backgroundColor: '#B0E0E6' }}>
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
                            }}> <FontAwesomeIcon icon={faMapLocationDot} className="me-2" /> Lihat Google Maps</button>
                        </a>                        
                    </div>

                    <div className="py-2">
                        <small className="d-block my-1">Gg. H. Togog 2, Kel. Pondok Aren, Kec. Pondok Aren, Kota Tangerang Selatan, Banten 15224</small>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default InvitationWeddingDate;