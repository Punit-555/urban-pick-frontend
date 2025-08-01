import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import logo from './assets/logo.svg';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import MyProfile from './pages/myProfile/MyProfile';
import ProductDetails from './pages/productDetails/ProductDetails';
import SuccessModal from './components/success/SuccessModal';
import Layout from './components/layout/Layout';
import Services from './pages/services/Services';
 import ContactUs from './pages/contactUs/ContactUs';
import Subscription from './pages/subscription/Subscription';

function App() {
  const [loadingSplashScreen, setLoadingSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingSplashScreen(false);
    }, 2000);
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
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path ="/contactUs" element={<ContactUs />}/>
           <Route path ="/subscription" element={<Subscription />} />
        </Route>
      </Routes>
      <SuccessModal />
    </>
  );
}

export default App;
