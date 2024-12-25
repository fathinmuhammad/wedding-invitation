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
    
    const targetDate = new Date("2025-02-01T09:00:00").getTime();
    
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
    
        return () => clearInterval(timer);
    }, [targetDate]);

  return (
    <div className="invitation-wedding-date" style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))',
        fontFamily: "'Playfair Display', serif",
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
            <section className="invitation-section" 
                // style={{
                //     minHeight: '100vh',
                //     display: 'flex',
                //     flexDirection: 'column',
                //     alignItems: 'center',
                //     boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
                //     borderRadius: '10px',
                //     margin: '20px 0',
                //     background: 'white'
                //   }}
                id="wedding-date">
                        <motion.div 
                        className="flower-frame-top-right flower-top-right" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                        <motion.div 
                        className="flower-frame-top-left flower-top-left" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                        <motion.div 
                        className="flower-frame-bottom-right flower-bottom-right" 
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>        
                        <motion.div 
                        className="flower-frame-bottom-left flower-bottom-left"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,   
                            ease: "easeInOut"
                        }}
                        ></motion.div>
                <div className="container text-center">

                    <motion.h2
                    className="font-esthetic py-2 m-0"
                    style={{ 
                        fontSize: '1rem', 
                        fontFamily: "'Poppins', sans-serif", 
                        color: '#1762ad',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                        marginTop: '2rem' 
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    >
                    Allah Subhanahu Wa Ta'ala, berfirman
                    </motion.h2>

                    <motion.div
                    className="bg-theme-dark mt-4 p-3 shadow rounded-4 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '20px',
                        border: '1px solid rgba(135,206,235,0.3)',
                        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
                        marginLeft: '1rem',
                        marginRight: '1rem',
                    }}
                    >
                         <motion.p
                        className="p-1 mb-3"
                        style={{ fontSize: '0.95rem', color: '#778899', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                        وَمِنۡ اٰيٰتِهٖۤ اَنۡ خَلَقَ لَكُمۡ مِّنۡ اَنۡفُسِكُمۡ اَزۡوَاجًا لِّتَسۡكُنُوۡۤا اِلَيۡهَا وَجَعَلَ بَيۡنَكُمۡ مَّوَدَّةً وَّرَحۡمَةً  ؕ اِنَّ فِىۡ ذٰ لِكَ لَاٰيٰتٍ لِّقَوۡمٍ يَّتَفَكَّرُوۡنَ
                        </motion.p>
                        <motion.p
                        className="p-1 mb-3"
                        style={{ 
                            fontSize: '0.95rem', 
                            color: '#778899', 
                            textAlign: 'justify', 
                            marginTop: '1rem', 
                            marginLeft: '1rem', 
                            marginRight: '1rem', 
                            marginBottom: '2rem' 
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                        Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                        </motion.p>
                        <a
                            href="https://quran.com/id/30/21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="save-date-btn"
                        >
                            <button style={{
                                fontFamily: 'Playfair Display, serif',
                                fontSize: '1rem',
                                color: '#1762ad',
                                textShadow: '2px 2px 4px rgba(135, 206, 235, 0.2)',
                                padding: '0.8rem 2rem',
                                background: '#f0f8ff',
                                border: '2px solid #87ceeb',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginBottom: '3rem'
                            }}>
                            <span>QS. Ar-Rum: 21</span>
                            </button>
                        </a>
                    </motion.div>

                    <motion.h2 className="font-esthetic py-4 m-0" style={{ fontSize: '2rem', color: '#1762ad', fontFamily: "'Poppins', sans-serif", marginBottom: "0rem" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Moment Bahagia</motion.h2>
    
                    <div
                        className="border rounded-pill shadow py-2 px-4 mt-2 mb-4"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(7, auto)",
                            gap: "0.5rem",
                            alignItems: "center",
                            justifyItems: "center",
                            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            marginLeft: '3rem',
                            marginRight: '3rem',
                        }}
                        >
                        {/* Hari */}
                        <div className="text-center">
                            <motion.h2
                            className="m-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                fontSize: "1.5rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#1762ad",
                                fontWeight: "bold",
                            }}
                            >
                            {timeLeft.days}
                            </motion.h2>
                            <small
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#778899",
                            }}
                            >
                            Hari
                            </small>
                        </div>

                        <span style={{ fontSize: "1.5rem", color: "#1762ad", fontWeight: "bold" }}>
                            :
                        </span>

                        {/* Jam */}
                        <div className="text-center">
                            <motion.h2
                            className="m-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                fontSize: "1.5rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#1762ad",
                                fontWeight: "bold",
                            }}
                            >
                            {timeLeft.hours}
                            </motion.h2>
                            <small
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#778899",
                            }}
                            >
                            Jam
                            </small>
                        </div>

                        {/* Separator ':' */}
                        <span style={{ fontSize: "1.5rem", color: "#1762ad", fontWeight: "bold" }}>
                            :
                        </span>

                        {/* Menit */}
                        <div className="text-center">
                            <motion.h2
                            className="m-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                fontSize: "1.5rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#1762ad",
                                fontWeight: "bold",
                            }}
                            >
                            {timeLeft.minutes}
                            </motion.h2>
                            <small
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#778899",
                            }}
                            >
                            Menit
                            </small>
                        </div>

                        {/* Separator ':' */}
                        <span style={{ fontSize: "1.5rem", color: "#1762ad", fontWeight: "bold" }}>
                            :
                        </span>

                        {/* Detik */}
                        <div className="text-center">
                            <motion.h2
                            className="m-0"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                fontSize: "1.5rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#1762ad",
                                fontWeight: "bold",
                            }}
                            >
                            {timeLeft.seconds}
                            </motion.h2>
                            <small
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Arial, sans-serif",
                                color: "#778899",
                            }}
                            >
                            Detik
                            </small>
                        </div>
                        </div>

    
                    <motion.p className="py-2 m-0" 
                        style={{ 
                                fontSize: '0.95rem', 
                                fontFamily: "'Poppins', sans-serif", 
                                marginBottom:'0.8rem',
                                marginLeft: '1rem',
                                marginRight: '1rem', 
                            }} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1 }}>
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, 
                            insyaAllah kami akan menyelenggarakan acara:
                    </motion.p>
    
    
                    <div className="overflow-x-hidden">
                        <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" 
                                    style={{ 
                                        fontSize: '2rem', 
                                        color: '#1762ad', 
                                        fontFamily: "'Poppins', sans-serif", 
                                        marginTop: '0rem', 
                                        marginBottom:'0rem' 
                                    }} 
                                    initial={{ opacity: 0, y: 20 }} 
                                    animate={{ opacity: 1, y: 0 }} 
                                    transition={{ duration: 1 }}>
                                        Akad
                            </motion.h2>
                            <p style={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'0rem' }}>Pukul 09.00 WIB - Selesai</p>
                        </div>
    
                        <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
                            <motion.h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem', color: '#1762ad', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'0rem' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>Resepsi</motion.h2>
                            <p style={{ fontSize: '1rem', fontFamily: "'Poppins', sans-serif", marginTop: '0rem', marginBottom:'1rem' }}>Pukul 10.00 WIB - Selesai</p>
                        </div>
                    </div>
    
                    <div className="py-2">
                        <a 
                            href="https://maps.app.goo.gl/YM3oyTn7xPTgpyjeA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-outline-light btn-sm rounded-pill shadow mb-2 px-3" 
                            style={{ background: '#B0E0E6' }}>
                                <button style={{
                                    background: '#1762ad',
                                    color: 'white',
                                    padding: '0.8rem 2rem',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontSize: '1.1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
                                    }}
                                > 
                                    <FontAwesomeIcon icon={faMapLocationDot} className="me-2" style={{marginRight: '0.3rem'}} /> 
                                    Lihat Google Maps
                                </button>
                        </a>                        
                    </div>
                    <br/>
                    <div className="text-center mb-4"
                        style={{
                            marginBottom:'3rem',
                            marginLeft: '1rem',
                            marginRight: '1rem',
                        }}
                    >
                        <motion.small 
                            style={{
                                fontSize: '1rem',
                                fontFamily: "'Poppins', sans-serif",
                                textAlign: 'center',
                                }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            whileHover={{ scale: 1.05 }}>
                                    Gg. H. Togog 2, Kel. Pondok Aren, Kec. Pondok Aren, Kota Tangerang Selatan, Banten 15224
                        </motion.small>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default InvitationWeddingDate;