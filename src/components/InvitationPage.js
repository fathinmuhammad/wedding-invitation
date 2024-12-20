import React from "react";
import "../styles.css";
import bgImage from "../assets/images/bg.png";

const InvitationPage = ({ onOpen }) => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("to") || "Tamu Undangan";

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
        <div className="image-container">
          <img
            src={bgImage}
            alt="Couple"
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid #B0E0E6',
              boxShadow: '0 5px 15px rgba(135,206,235,0.3)',
              marginBottom: '1.5rem'
            }}
          />
        </div>
        <h2 style={{
          color: '#87CEEB',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          fontFamily: "'Playfair Display', serif"
        }}>The Wedding of Test</h2>
        <h1 style={{
          color: '#4682B4',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 'bold'
        }}>Fathin & Fridha</h1>
        <p style={{
          color: '#5F9EA0',
          fontSize: '1.2rem',
          marginBottom: '0.5rem'
        }}>
          Kepada Bapak/Ibu/Saudara/i<br />
          <strong style={{color: '#4682B4'}}>{guestName}</strong>
        </p>
        <p style={{
          color: '#87CEEB',
          fontSize: '1.1rem',
          marginBottom: '1.5rem'
        }}>Di tempat</p>
        <button onClick={onOpen} style={{
          background: '#87CEEB',
          color: 'white',
          padding: '0.8rem 2rem',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 3px 10px rgba(135,206,235,0.2)'
        }}>Buka Undangan</button>
        <p style={{
          color: '#A9A9A9',
          fontSize: '0.9rem',
          marginTop: '1.5rem'
        }}>
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
};

export default InvitationPage;
