import React from "react";
import Item from "./Item";

const ItemList = ({products}) => {
    return (
        products.map(p => 
            <Item 
            id = {p.id}
            name = {p.name}
            price = {p.price} 
            img = {p.img}
            stock = {p.stock}
            />)
    )
}

export default ItemList;