import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="header"
    >
      <h1>Wedding Invitation</h1>
      <p>Join us in celebrating our special day!</p>
    </motion.div>
  );
};

export default Header;
