function Items({ items }){
    return(
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <div>
                        <h5>
                            {item.id} {item.first_name} {item.last_name}
                        </h5>
                        <p>{item.email}</p>
                    </div>
                    <img src={item.avatar} alt={item.email}/>
                </li>
            ))}
        </ul>
    )
}

export default Items