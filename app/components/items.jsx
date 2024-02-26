function Items({ items }){
    return(
        <div className="grid grid-cols-4 gap-4">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col items-center bg-customColor">
                    <img src={item.avatar} alt={item.email}/>
                    <h5>{item.first_name} {item.last_name}</h5>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Items