import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface DeleteButtonProps {
  postId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ postId }) => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const assetsBaseUrl = import.meta.env.VITE_ASSETS_URL;
  axios.defaults.withCredentials = true;
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${baseUrl}/posts/${postId}`, {
        withCredentials: true,
      });
      if (res.status === 403) {
        console.error("You are not allowed");
        navigate("/home");
      } else {
        console.log("deleted successfully");
        
      }
    } catch (error) {
      console.log(" error during the delete  :", error);
      // Handle error or show a notification to the user
    }
  };

  return (
    <button onClick={handleDelete}>
      <img src="trash.png" alt="trash" className="w-6 h-6" />
    </button>
  );
};

export default DeleteButton;
