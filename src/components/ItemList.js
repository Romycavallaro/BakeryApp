import React from "react";
import Item from "./Item";
import './ItemListContainer.css'

const ItemList = ({products}) => {
    return (
        <div className="contenedorItem">
          {products.map((p) => (
            <Item
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              descripcion={p.descriction}
              img={p.img}
              stock={p.stock}
            />
          ))}
        </div>
      );
    };
    
export default ItemList;