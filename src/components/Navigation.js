import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // Import motion dari framer-motion

const Navigation = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <div className="bottom-nav">
      <div
        className="nav-item"
        onClick={() => handleScrollToSection("details")}
      >
         <FontAwesomeIcon icon={faEnvelope} className="me-2" />
      </div>
      <div
        className="nav-item"
        onClick={() => handleScrollToSection("bridge")}
      >
        <FontAwesomeIcon icon={faHeart} className="me-2" />
      </div>
      <div
        className="nav-item"
        onClick={() => handleScrollToSection("weddingDate")}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
      </div>
      <div
        className="nav-item"
        onClick={() => handleScrollToSection("giftSection")}
      >
        <FontAwesomeIcon icon={faGifts} className="me-2" />
      </div>
      <div
        className="nav-item"
        onClick={() => handleScrollToSection("commentForm")}
      >
        <FontAwesomeIcon icon={faCommentAlt} className="me-2" />
      </div>
    </div>
  );
};

export default Navigation;
