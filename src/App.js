import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import InvitationDetails from "./components/InvitationDetails";
import GiftSection from "./components/GiftSection";
import CommentForm from "./components/CommentForm";
import InvitationPage from "./components/InvitationPage";
import InvitationBridge from "./components/InvitationBridge";
import InvitationWeddingDate from "./components/InvitationWeddingDate";
import InvitationGalery from "./components/InvitationGalery";
import InvitationEnd from "./components/InvitationEnd";
import Navigation from "./components/Navigation";
import sound from "../src/assets/music/sound.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(sound));

  const handleOpen = () => {
    setIsOpen(true);

    const audio = audioRef.current;
    audio.play().catch((error) => console.error("Audio playback error:", error));
    setIsPlaying(true);

    setTimeout(() => {
      const detailsElement = document.getElementById("details");
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleToggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => console.error("Audio playback error:", error));
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ overflowY: isOpen ? "auto" : "hidden" }}
    >
      <InvitationPage onOpen={handleOpen} />

      {isOpen && (
        <>
          <div id="details">
            <InvitationDetails />
          </div>
          <div id="bridge">
            <InvitationBridge />
          </div>
          {/* <InvitationFirmanAllah /> */}
          <div id="weddingDate">
            <InvitationWeddingDate />
          </div>
          <InvitationGalery />
          <div id="giftSection">
            <GiftSection />
          </div>
          <div id="commentForm">
            <CommentForm />
          </div>
          <InvitationEnd />
          <Navigation />
          <button onClick={handleToggleMusic} style={{ position: 'fixed', top: '20px', left: '20px', zIndex: '1000', background: isPlaying ? 'linear-gradient(135deg, #87CEEB 0%, #D3D3D3 100%)' : 'linear-gradient(135deg, #ADD8E6 0%, #E0E0E0 100%)', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer', boxShadow: '0 3px 10px rgba(0,0,0,0.2)' }}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} className="me-2" /> : <FontAwesomeIcon icon={faPlay} className="me-2" />}
          </button>
        </>
      )}
    </motion.div>
  );
}

export default App;