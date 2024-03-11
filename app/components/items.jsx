'use client';
import { useRouter } from 'next/navigation';

function Items({ items }) {
  console.log(items);
  const router = useRouter(); 

  const handleClick = (itemId) => {
    router.push(`/itemview/${itemId}`); 
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center bg-customColor cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
          style={{ width: '310px', height: '240px',boxShadow: '0 0 15px 7px rgba(0, 0, 255, 0.5)', }}
           
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
