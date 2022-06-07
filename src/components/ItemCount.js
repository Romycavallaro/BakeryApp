import React from "react"
import { useState } from "react"
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const sumarItem = () => {
        if(count < stock)
        setCount(count + 1);
    };

    const restarItem = () => {
        if(count > 1)
        setCount(count - 1);
    }

    const confirmarContador = () => {  
    }

    return (
        <div className="botonContador">
            <p className="Contador" style={{textAlign: 'center' }}>Contador : {count} </p>
            <button onClick={sumarItem}>Sumar Item</button>
            <button onClick={restarItem}>Restar Item</button>
            <button onClick={confirmarContador}>Confirmar Compra</button>
        </div>
    )
}

export default ItemCount