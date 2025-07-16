import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/features/auth/authSlice";
import Header from "../components/header/Header";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div >
      <Header />
      {/* <h1>Welcome, {user?.username} 👋</h1>      
      <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
