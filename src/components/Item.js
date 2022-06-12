import React from "react"
import ItemCount from "./ItemCount"

const Item = ({id, name, img, stock}) => {
    return (
            <div key={id}>
                <h4>{name}</h4>
                <img src={img} alt={name} />
                <ItemCount stock={stock} onAdd initial={1} />
            </div>
    )
}

export default Item