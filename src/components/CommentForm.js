import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { postComment, fetchComments } from "../api"; // Pastikan API diimport dengan benar
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !attendance || !message) {
      Swal.fire({
        title: "Peringatan!",
        text: "Harap isi semua field sebelum mengirim!",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    const newComment = { name, attendance, message };
    try {
      await postComment(newComment); // Simpan komentar ke database
      setComments([...comments, newComment]); // Tambahkan komentar baru ke daftar
      setName("");
      setAttendance("");
      setMessage("");
      Swal.fire({
        title: "Berhasil!",
        text: "Komentar berhasil dikirim!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      if (error.message.includes("CORS")) {
        Swal.fire({
          title: "Gagal!",
          text: "Gagal mengirim komentar karena masalah CORS. Silakan coba lagi dengan menggunakan proxy atau mengaktifkan CORS di server.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else if (error.message.includes("Forbidden")) {
        Swal.fire({
          title: "Gagal!",
          text: "Gagal mengirim komentar karena akses ditolak. Silakan periksa izin akses Anda.",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Gagal!",
          text: "Gagal mengirim komentar. Silakan coba lagi.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  // Fetch comments on mount
  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments(); // Ambil komentar dari server
        setComments(data);
      } catch (error) {
        console.error("Gagal memuat komentar:", error);
      }
    };
    loadComments();
  }, []);

  return (
    <div
      className="invitation-bridge"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(rgba(240,248,255,0.9), rgba(176,216,255,0.9))", // Soft blue gradient
        fontFamily: "'Playfair Display', serif",
        padding: "2rem 1rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <motion.form
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        className="comment-form"
        onSubmit={handleSubmit}
        style={{
          maxWidth: "100%",
          margin: "2rem auto",
          padding: "2rem",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          className="font-esthetic text-center mt-2 mb-4"
          style={{
            fontSize: "2.5rem",
            color: "#4682B4",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.5px",
            fontWeight: "600",
          }}
        >
          Ucapan &amp; Doa
        </h2>

        {/* Input Nama */}
        <div className="mb-4">
          <label
            htmlFor="form-name"
            className="form-label"
            style={{
              fontSize: "1rem",
              fontFamily: "'Poppins', sans-serif",
              color: "#6c757d",
              fontWeight: "500",
            }}
          >
            <i className="fa-solid fa-person me-2"></i> Nama
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="form-name"
            placeholder="Isikan Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              fontSize: "1rem",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              maxWidth: "90%",
            }}
          />
        </div>

        {/* Dropdown Presensi */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <label
            htmlFor="form-presence"
            className="form-label mb-2" // Tambahkan margin bottom untuk jarak spasi
            style={{
              fontSize: "1rem",
              fontFamily: "'Poppins', sans-serif",
              color: "#6c757d",
              fontWeight: "500",
              marginRight: "1.2rem"
            }}
          >
            <FontAwesomeIcon icon={faPersonCircleQuestion} className="icon" style={{marginRight: "1.2rem"}} />
            Presensi  
          </label>
          <select
            className="form-select shadow-sm"
            id="form-presence"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            required
            style={{
              fontSize: "1rem",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <option value="" disabled hidden>
              Konfirmasi Presensi
            </option>
            <option value="Datang">Datang</option>
            <option value="Berhalangan">Berhalangan</option>
          </select>
        </motion.div>

        {/* Textarea Ucapan */}
        <div className="mb-4">
          <label
            htmlFor="form-comment"
            className="form-label"
            style={{
              fontSize: "1rem",
              fontFamily: "'Poppins', sans-serif",
              color: "#6c757d",
              fontWeight: "500",
            }}
          >
            <i className="fa-solid fa-comment me-2"></i> Ucapan &amp; Doa
          </label>
          <textarea
            className="form-control shadow-sm"
            id="form-comment"
            rows="4"
            placeholder="Tulis Ucapan dan Doa"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{
              fontSize: "1rem",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              maxWidth: "90%",
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary shadow-sm"
            style={{
              fontSize: "1rem",
              padding: "0.75rem",
              backgroundColor: "#4682B4",
              border: "none",
              borderRadius: "10px",
              color: "#ffffff",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#36648b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4682B4")}
          >
            Submit
          </button>
        </div>
      </motion.form>

      {/* Daftar Komentar */}
      <div className="comment-list mt-5" 
        style={{
          maxWidth: "100%",
          margin: "2rem auto",
          padding: "2rem",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 
          style={{
            fontSize: "2.5rem",
            color: "#4682B4",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.5px",
            fontWeight: "600",
          }}
        >Ucapan</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="comment-item bg-light p-3 rounded mb-3 shadow-sm"
              style={{ textAlign: "left" }}
            >
              <p className="mb-1">
                <strong>{comment.name}</strong> - {comment.attendance}
              </p>
              <p className="m-0">{comment.message}</p>
            </motion.div>
          ))
        ) : (
          <p>Belum ada komentar.</p>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
