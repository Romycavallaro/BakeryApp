import React from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = ({id, item }) => {
  return (
    <div key={id}>
        <h4>{item.name}</h4>
        <h4>{item.descripcion}</h4>
        <img src={item.img} alt={item.name} />
        <ItemCount stock={item.stock} onAdd initial={1} />
    </div>
  )
}

export default ItemDetail