import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface DeleteButtonProps {
  postId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ postId }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://community-livid.vercel.app/posts/${postId}`, {
        withCredentials: true,
      });
      if (res.status === 403) {
        console.error("You are not allowed");
        navigate("/home");
      } else {
        console.log("deleted successfully");
        
      }
    } catch (error) {
      console.log(" u D'ONT HAVE THE ACCES :", error);
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
