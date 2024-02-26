import React from 'react';
import '../components/navbarR.css';


const Navbarr = () => {
  return (
    <nav className="flex justify-between bg-navbarPurple py-6 px-4">
      <div className="logo"></div>
      <div className="flex left-content">
        <div id="icon_moneda" className="mr-2"></div>
        <div className="mr-8 white-text" >50</div>
     
      <div className="profile-icon mr-8">RM</div>
      <div className="buttons">
        <button className='bg-blue-700'>Sell</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbarr; 