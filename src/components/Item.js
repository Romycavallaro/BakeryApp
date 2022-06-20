import React from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"


const Item = ({id, name, price, img, descripcion, stock}) => {
    return (
            <div key={id}>
                <h4>{name}</h4>
                <img src={img} alt={name} />
                <p>{price}</p>
                <p>{descripcion}</p>
                <Link to={`/item/${id}`}>
                    <button>Ver detalle del producto</button>
                </Link>
                <ItemCount stock={stock} onAdd initial={1} />
            </div>
    )
}
export default Item