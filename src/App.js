import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import logo from './assets/logo.svg'; // replace with your actual path
import Login from './pages/login/Login';
import Home from './pages/Home';

function App() {
  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingSplashScreen(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loadingSplashScreen) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="UrbanPick Logo" className="splash-logo" />
        <h2 className="splash-text">UrbanPick – Curated picks for your modern life</h2>
      </div>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
