import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.svg";
import { loginUser } from "../../redux/features/auth/authSlice";
import { hideSuccessModal, showSuccessModal } from "../../redux/features/modals/modalSlice";

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

  if (formData.username && formData.password) {
    dispatch(loginUser({ username: formData.username }));

    // ✅ Show success modal
    dispatch(showSuccessModal("Login successful!"));

    // ✅ Delay to allow user to see the modal, then hide modal and navigate
    setTimeout(() => {
      dispatch(hideSuccessModal());  // close modal first
      navigate("/home");      // then navigate
    }, 2000);  // you can adjust the delay (in ms)
  }
};

  return (
    <div className="log-form">
      <h2 className="loginFlexbox"> <img width={35} height={30} src={logo} alt="" /> Login to your account</h2>
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
