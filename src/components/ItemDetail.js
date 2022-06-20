import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({id, name, img, price, descripcion, stock}) => {
  return (
    <div key={id}>
        <h4>{name}</h4>
        <img src={img} alt={name} />
        <h4>{descripcion}</h4>
        <p>{price}</p>
        <ItemCount stock={stock} onAdd initial={1} />
    </div>
  )
}

export default ItemDetail