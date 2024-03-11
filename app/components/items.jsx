'use client';
import { useRouter } from 'next/navigation';

function Items({ items }) {
  console.log(items);
  const router = useRouter(); // <-- Asegúrate de llamar a la función useRouter

  const handleClick = (itemId) => {
    router.push(`/itemview/${itemId}`); // <-- Corregir la sintaxis
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center bg-customColor cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-700"
          style={{ width: '310px', height: '240px' }}
          onClick={() => handleClick(item.id)}
        >
          <img
            src={item.image}
            style={{ width: '288px', height: '180px', padding: '16px' }}
          />
          <h5>{item.price}</h5>
          <h5>{item.category}</h5>
      
        </div>
      ))}
    </div>
  );
}

export default Items;
