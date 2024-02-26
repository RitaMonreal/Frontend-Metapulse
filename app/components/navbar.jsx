const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between bg-navbarPurple py-6 px-4">
      <button 
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
         <img 
            src="/images/letras_metapulse.png" 
            alt="Imagen item" 
            style={{ maxWidth: '120px' }} // Establecer un ancho máximo para la imagen, por ejemplo, 50px
          />
        </button>
        
      </div>
    </header>
  );
};

export default Navbar;
