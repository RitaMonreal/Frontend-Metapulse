import React from 'react';
import '../components/navbarR.css';


const Navbarr = () => {
  return (
    <nav className="flex justify-between bg-navbarPurple py-6 px-4">
      <div className="logo">
       
      </div>
      <div className="buttons">
        <div>Botón 1</div>
        <div>Botón 1</div>
        <button>Botón 2</button>
      </div>
    </nav>
  );
}

export default Navbarr; 