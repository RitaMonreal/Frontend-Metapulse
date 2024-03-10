import React from 'react';
import '../components/navbarR.css';
import Link from 'next/link';

const Navbarr = () => {
  return (
    <header className="flex bg-navbarPurple py-4">
      <div className="flex w-1/2 ml-8">
        <button className="bg-white rounded-full px-4 py-2 border-2 border-blue-500 shadow-lg hover:shadow-blue-700">
          <span class="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-xl">
            Metapulse
          </span>
        </button>
      </div>
      <div className="flex w-1/2 items-center justify-end gap-16 mr-8">
        <div className="flex items-center gap-4">
          <img src="/images/coin.png" alt="monedas jugador" className="w-10" />
          <div className="text-white">200</div>
        </div>

        <div className="bg-purple-300 rounded-full p-2 text-white cursor-pointer">
          RM
        </div>

        <button className="bg-blueButton px-4 py-2 text-white font-bold">
          Sell
        </button>
      </div>
    </header>
  );
};

export default Navbarr;
