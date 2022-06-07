import React from "react"
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (
        <div clasName="saludo">
            <h3 style={{textAlign: 'center', color: '#863e74', fontFamily: 'cursive', fontSize: '30px'}}>{props.greeting}</h3>
            <ItemCount stock={5} onAdd initial={1} />
        </div>
        )
     
    }
export default ItemListContainer