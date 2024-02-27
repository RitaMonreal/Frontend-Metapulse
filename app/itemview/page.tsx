import Navbarr from '../components/navbarR';

const ItemViewPage = () => {
  return (
    <div className="bg-backgroundBlue h-screen w-screen flex flex-col mx-auto p-0">
      <Navbarr />
      <div className="flex bg-backgroundPurple h-3/4 w-5/6 mx-auto mt-12 rounded-md">
        {/* lado izquierdo */}
        <div className="w-1/2 flex flex-col p-8">
          {/* Imagen item */}
          <div className="h-1/2 mx-auto">
            <div className="h-full rounded-md overflow-hidden">
              <img src="/images/logo_metapulse.png" alt="Imagen item" />
            </div>
          </div>
          {/* Descripcion item */}
          <div className="h-1/2 w-full mx-auto flex flex-col mt-6 gap-4">
            <label
              htmlFor="descripcionItem"
              className="text-textGray text-3xl "
            >
              Description
            </label>
            <div className="w-full h-full">
              <textarea
                id="descripcionItem"
                className="w-full h-full rounded-md resize-none"
              ></textarea>
            </div>
          </div>
        </div>
        {/* Lado derecho */}
        <div className="w-1/2 p-8 flex flex-col">
          {/* Nombre item */}
          <div className="flex flex-col gap-6 ml-12">
            <h1 className="text-textGray text-6xl font-semibold">Item X</h1>

            <div className="flex items-center gap-4">
              <div className="h-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-md overflow-hidden">
                  <img
                    src="/images/coin.png"
                    alt="Imagen item"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-white text-xl">5000</p>
            </div>
          </div>
          {/* Boton buy */}
          <div className="flex flex-1 justify-start items-end ml-12">
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <span className="text-3xl">Buy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemViewPage;
