function Items({ items }){
    return(
        <div className="grid grid-cols-4 gap-10">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center bg-customColor " style={{ width: '312px', height: '220px' }}>
                    <img src={item.avatar} alt={item.email} style={{ width: '288px', height: '140px', padding: '16px' }}/>
                    <h5>{item.first_name} {item.last_name}</h5>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Items