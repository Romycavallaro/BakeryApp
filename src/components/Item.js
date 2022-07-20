import React from "react"
import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, name, price, img, descripcion}) => {
    return (
            <div className="card" key={id}>
                <h4>{name}</h4>
                <div className="container">
                    <img className="img-item" src={img} alt={name} />
                    <p> Precio $ {price}</p>
                    <p>{descripcion}</p>
                    <Link to={`/item/${id}`}>
                        <button className="verDetalle">Ver detalle del producto</button>
                    </Link>
                </div>
            </div>
    )
}
export default Item