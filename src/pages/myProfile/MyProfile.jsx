import React, { useEffect, useState } from 'react';
import "./myProfile.css";
import stylishImage from "../../assets/stylishImage.jpg";
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';

function MyProfile() {
 const [formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
   const users  = useSelector((state) => state.auth.users);



   useEffect(()=>{
     setFormData({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
     })
   },[users]);
   
  console.log("User",users);
  return (
    <>
    <div className='profileContainer'>
      <h1>My Profile</h1>

      <div className='profileContent'>
        {/* Left Side - Image */}
        <div className='profileImageSection'>
          <img src={stylishImage} width={200} height={200} alt="Profile" />
        </div>

        {/* Right Side - Form */}
        <div className='profileFormSection'>
          <form className='formFlex'>
            <div className='formFlexCol'>
              <label>First Name:</label>
              <input type="text" value={formData.firstName} />
            </div>

            <div className='formFlexCol'>
              <label>Last Name:</label>
              <input type="text" value={formData.lastName} />
            </div>

            <div className='formFlexCol'>
              <label>Phone Number:</label>
              <input type="number" />
            </div>

            <div className='formFlexCol'>
              <label>Email:</label>
              <input type="email" />
            </div>

            <div className='formFlexCol'>
              <label>Password:</label>
              <input type="password" value={formData.password} />
            </div>

            <button type="submit" className="saveBtn">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
      <Footer />
    
    </>
  );
}

export default MyProfile;
