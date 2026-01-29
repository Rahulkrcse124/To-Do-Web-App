import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";
import "../styles/auth.css";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put(`/auth/reset-password/${token}`, {
        password,
      });
      setMessage(res.data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Token expired");
    }
  };

  return (
    <div className="auth-box">
      <h2>Create New Password</h2>

      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="Enter new password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Reset Password</button>
      </form>

      {message && <p className="info-text">{message}</p>}
    </div>
  );
}
