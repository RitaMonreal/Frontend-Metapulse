import { ButtonInventory } from './buttonInventory';

export const Inventory = () => {
  return (
    <div className="w-1/2 h-full flex flex-col">
      <h1 className="text-gray-400 font-bold text-4xl">Your inventory</h1>
      <form action="" className="mt-4 flex flex-col h-full">
        <input
          type="text"
          name="buscador"
          id="buscadorItems"
          placeholder="Search..."
          className="rounded-md p-2 w-full placeholder-gray-500 text-xl font-bold"
        />
        <div className="bg-white mt-1 rounded-sm flex flex-col flex-1 align-middle mb-20">
          <ButtonInventory name="Item1" />
          <ButtonInventory name="Item2" />
          <ButtonInventory name="Item3" />
          <ButtonInventory name="Item4" />
          <ButtonInventory name="Item5" />
          <ButtonInventory name="Item6" />
        </div>
      </form>
    </div>
  );
};
