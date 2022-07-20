import React, { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
   

    const sumarItem = () => {
        if(count < stock)
        setCount(count + 1)
    };

    const restarItem = () => {
        if(count > 1)
        setCount(count - 1)
    };

    const confirmarContador = () => {  
        onAdd(count);
    };
    

    return (
        <div className="Count">
        <div className="contenedorContador">
            <button className="boton" onClick={restarItem}> - </button>
            <button className="Contador">{count} </button>
            <button className="boton" onClick={sumarItem}> + </button>
        </div>
        <div>
            <button className="addToCart" onClick={confirmarContador}>Agregar al carrito</button>
        </div>
        </div>    
    )
}

export default ItemCount