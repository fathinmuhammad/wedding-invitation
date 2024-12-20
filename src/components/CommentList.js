import React, { useEffect, useState } from "react";
import { fetchComments } from "../api";
import { motion } from "framer-motion";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchComments();
      setComments(data);
    };
    loadComments();
  }, []);

  return (
    <div className="comment-list">
      <h2>Ucapan</h2>
      {comments.map((comment, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
        className="comment-item"
      >
        <p><strong>{comment.name}:</strong> {comment.message}</p>
      </motion.div>
      ))}
    </div>
  );
};

export default CommentList;
