import React, { useState } from "react";
import './ItemCount.css'


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
        <div className="botonContador">
        <button onClick={restarItem}> - </button>
        <p className="Contador" style={{textAlign: 'center' }}>{count} </p>
        <button onClick={sumarItem}> + </button>
        <button onClick={confirmarContador}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount