import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import customFetch from "../utils/promise"
import productos from "../utils/productos"


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        customFetch(3000, productos)
        .then(resultado => setItems(resultado))
        .catch((error) => console.log(error));
}, [items]);

    return (
        <div className="saludo">
            <h3 style={{textAlign: 'center', color: '#863e74', fontFamily: 'cursive', fontSize: '30px'}}>{props.greeting}</h3>
            <ItemList products = {items} />
        </div>
        )
}
export default ItemListContainer