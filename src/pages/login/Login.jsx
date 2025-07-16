import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.svg"
import { loginUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake login
    if (formData.username && formData.password) {
      dispatch(loginUser({ username: formData.username }));
      navigate("/home");
    }
  };

  return (
    <div className="log-form">
     <h2>Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Login</button>
        <a className="forgot" href="#">Forgot Username?</a>
      </form>
    </div>
  );
};

export default Login;
