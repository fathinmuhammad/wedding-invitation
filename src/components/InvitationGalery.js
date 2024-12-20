import React from "react";
import { motion } from "framer-motion";

const images = [
  { id: 1, src: require("../assets/imagesKita/1.jpeg") },
  { id: 2, src: require("../assets/imagesKita/2.jpeg") },
  { id: 3, src: require("../assets/imagesKita/3.jpeg") },
  { id: 4, src: require("../assets/imagesKita/4.jpeg") },
  { id: 5, src: require("../assets/imagesKita/5.jpeg") },
  { id: 6, src: require("../assets/imagesKita/6.jpeg") },
  { id: 7, src: require("../assets/imagesKita/7.jpeg") },
  { id: 8, src: require("../assets/imagesKita/8.jpeg") },
  { id: 9, src: require("../assets/imagesKita/9.jpeg") },
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
        className="gallery-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#87CEEB",
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
              whileHover={{ scale: 1.05 }}
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