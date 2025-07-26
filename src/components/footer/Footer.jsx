import React from 'react'
import logo from "../../assets/logo.svg"
import "./footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='mainContainer'>
        <div className='mainPart'>
       <div className='logoCenter'>
        <img src={logo} alt="UrbanPick Logo" width={40} height={40} />
       <h3>UrbanPick  </h3><br />
       <span style={{fontSize: '0.8rem', color: 'gray'}}>Developed By &#9829;
 <b>Fiza </b>&#9829;
</span>  
       </div>
       <div className='flexbox'>
        <Link to ="/">Terms and Privacy Notice</Link>
        <Link to ="/">Send us feedback</Link>
        <Link to ="/">Help</Link>
       </div>
       <p>&#169; 1996-2025, UrbanPick.com, Inc. or its affliates</p>
       </div>
    </div>
  )
}

export default Footer;