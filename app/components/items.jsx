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
          className="flex flex-col items-center bg-customColor"
          style={{ width: '312px', height: '220px' }}
          onClick={() => handleClick(item.id)}
        >
          <img
            src={item.image}
            alt={item.email}
            style={{ width: '288px', height: '140px', padding: '16px' }}
          />
          <h5>{item.price}</h5>
          <h5>{item.category}</h5>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
