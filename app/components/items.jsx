"use client"
import {useRouter} from 'next/navigation'

function Items({ items }) {
    const router = useRouter(); 

    const handleClick = (itemId) => {
        router.push(`/itemview/${itemId}`); 
    };

    return(
        <div className="grid grid-cols-4 gap-4">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center bg-customColor  mt-1 rounded-sm overflow-y-auto" style={{ width: '312px', height: '220px' }} onClick={() => handleClick(item.id)}>
                    <img src={item.avatar} alt={item.email} style={{ width: '288px', height: '140px', padding: '16px' }}/>
                    <h5>{item.first_name} {item.last_name}</h5>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Items;
