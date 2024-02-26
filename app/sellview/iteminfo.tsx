export const ItemInfo = () => {
  return (
    <div className="w-1/2 bg-backgroundPurple rounded-md flex flex-col p-6 h-full">
      {/* Flex-row 1 */}
      <div className="flex flex-row">
        {/* Imagen Item */}
        <div className="w-2/5">
          <div className="w-auto rounded-lg overflow-hidden">
            <img src="/images/logo_metapulse.png" alt="Imagen item" />
          </div>
        </div>

        {/* Nombre item y input */}
        <div className="w-auto flex flex-col ml-8">
          <h1 className="text-5xl font-bold text-textGray w-full text-left">
            Item X
          </h1>
          <div className="flex flex-col mt-10 gap-4">
            <label htmlFor="infoItem" className="text-textGray text-xl">
              $$$$$$
            </label>
            <input
              type="text"
              name="infoItem"
              id="InfoItems"
              placeholder=""
              className="rounded-md p-2 w-3/4 placeholder-gray-500 text-xl font-bold"
            />
          </div>
        </div>
      </div>

      {/* Flex-row 2 */}
      <div className="flex flex-row mt-8">
        <textarea
          name="descripcionItem"
          id="desc_item"
          className="w-full resize-none h-40 rounded-md"
        ></textarea>
      </div>

      {/* Flex-row 3 */}
      <div className="flex flex-grow justify-end">
        <div className="mt-8">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <span className="text-3xl">Sell</span>
          </button>
        </div>
      </div>
    </div>
  );
};
