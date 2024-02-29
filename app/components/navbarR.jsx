"use client"
import {useRouter} from 'next/navigation'
import React from 'react';
import '../components/navbarR.css';


const Navbarr = () => {

  const router = useRouter()

  return (
    <nav className="flex justify-between bg-navbarPurple py-6 px-4">
      <div className="logo hover:bg-slate-500" onClick={()=> {
        router.push(`/websiteview`)
      }}> </div>
      <div className="flex left-content">
        <div id="icon_moneda" className="mr-2"></div>
        <div className="mr-8 white-text" >50</div>
     
      <div className="profile-icon mr-8">RM</div>
      <div className="buttons">
        <button className="bg-blue-700 hover:bg-slate-500 mx-auto">Sell</button>
      </div>
      </div>
    </nav>
  );
}

export default Navbarr; 