import React from 'react';
import '../components/navbarR.css';


const Navbarr = () => {
  return (
    <nav className="flex justify-between bg-navbarPurple py-6 px-4">
      <div className="logo"></div>
      <div className="money">
        <div id="icon_moneda"></div>
        <div>50</div>
      </div>
      <div className="profile-icon">RM</div>
      <div className="buttons">
        <button>Sell</button>
      </div>
    </nav>
  );
}

export default Navbarr; 