import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import InvitationDetails from "./components/InvitationDetails";
import GiftSection from "./components/GiftSection";
import CommentForm from "./components/CommentForm";
import InvitationPage from "./components/InvitationPage";
import InvitationBridge from "./components/InvitationBridge";
import InvitationFirmanAllah from "./components/InvitationFirmanAllah";
import InvitationWeddingDate from "./components/InvitationWeddingDate";
import InvitationGalery from "./components/InvitationGalery";
import InvitationEnd from "./components/InvitationEnd";
import Navigation from "./components/Navigation";
import sound from "../src/assets/music/sound.mp3";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(new Audio(sound));

  const handleOpen = () => {
    setIsOpen(true);

    const audio = audioRef.current;
    audio.play().catch((error) => console.error("Audio playback error:", error));

    setTimeout(() => {
      const detailsElement = document.getElementById("details");
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
          <InvitationFirmanAllah />
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
        </>
      )}
    </motion.div>
  );
}

export default App;