import React from "react";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: require("../assets/imagesKita/1.jpeg") },
  { id: 2, src: require("../assets/imagesKita/2.jpeg") },
  { id: 3, src: require("../assets/imagesKita/3.jpeg") },
  { id: 4, src: require("../assets/imagesKita/4.jpeg") },
  { id: 5, src: require("../assets/imagesKita/5.jpeg") },
  { id: 5, src: require("../assets/imagesKita/6.jpeg") },
];

const InvitationGallery = () => {
  return (
    <div
      className="invitation-gallery"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))",
        fontFamily: "'Playfair Display', serif",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <motion.section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(135,206,235,0.2)',
          borderRadius: '10px',
          margin: '20px 0',
          background: 'white'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#1762ad",
            marginBottom: "1.5rem",
          }}
        >
          Galeri Foto
        </h2>
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={image.src}
                alt={`Foto ${image.id}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default InvitationGallery;