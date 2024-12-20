import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbzpAtQsG1ZxoXOgSXcePCmEQ1C1hxqFOFCsvwhY1zJYJFl7hE-tCW-U3vs7wWFgnkpbuQ/exec";

export const fetchComments = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: false
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const postComment = async (comment) => {
  try {
    const response = await axios.post(API_URL, comment, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    throw new Error(`Gagal mengirim komentar: ${response.statusText}`);
  } catch (error) {
    console.error('Error detail:', error.message);
    throw new Error('Terjadi kesalahan. Silakan coba lagi.');
  }
};