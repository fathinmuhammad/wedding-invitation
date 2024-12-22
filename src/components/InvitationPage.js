import React from "react";
import "../styles.css";
import bgImage from "../assets/images/bg.png";
import FramePage from "../assets/images/Frame3.png";

const InvitationPage = ({ onOpen }) => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to") || "Tamu Undangan";

    const containerStyle = {
      width: '220px',
      height: '220px',
      borderRadius: '50%',
      padding: '10px',
      background: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#ffffff',
      margin: '0 auto 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      filter: 'contrast(1.1) brightness(1.05)',
    };
  
    const imageStyle = {
      position: 'absolute',
      top: '100%',
      left: '100%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      height: '50%',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '3px solid white',
    };

  return (
    <div className="invitation-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="invitation-content" style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '90%'
      }}>
        <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={containerStyle}>
            <img
              src={FramePage}
              alt="Couple"
              aria-label="Image of a couple"
              style={imageStyle}
            />
          </div>
        </div>
        <h2 style={{
          color: '#87CEEB',
          fontSize: '1.2rem',
          marginBottom: '0.5rem',
          fontFamily: "'Royal Wedding', sans-serif"
        }}>The Wedding of</h2>
        <h1 style={{
          color: '#4682B4',
          fontSize: '24px',
          marginBottom: '1.5rem',
          fontFamily: "'Elsie', sans-serif;",
          fontWeight: 'bold'
        }}>Fathin & Fridha</h1>
        <p style={{
          color: '#5F9EA0',
          fontSize: '1rem',
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', serif"
        }}>
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <strong style={{color: '#4682B4', fontSize: '1.2rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>{guestName}</strong>
        <p style={{
          color: '#87CEEB',
          fontSize: '1rem',
          marginBottom: '1.5rem',
          fontFamily: "'Playfair Display', serif"
        }}>Di tempat</p>
        <button onClick={onOpen} style={{
          background: '#87CEEB',
          color: 'white',
          padding: '0.8rem 2rem',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 3px 10px rgba(135,206,235,0.2)',
          fontFamily: "'Playfair Display', serif"
        }}>Buka Undangan</button>
        <p style={{
          color: '#A9A9A9',
          fontSize: '0.8rem',
          marginTop: '1.5rem',
          fontFamily: "'Playfair Display', serif"
        }}>
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
};

export default InvitationPage;
