import React from "react"
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
            </div>
    )
}
export default Item