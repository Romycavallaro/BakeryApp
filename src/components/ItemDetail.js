import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, img, price, descripcion, stock}) => {
  const [ amount, setAmount] = useState(0);

  const onAdd = (selectedQuantity) => {
    setAmount(selectedQuantity);
  };
  
  return (
    <><div key={id}>
      <h4>{name}</h4>
      <img src={img} alt={name} />
      <h4>{descripcion}</h4>
      <p>{price}</p>
    </div><>
        {stock > 0 ? (
          <>
            {amount < 1 ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              <Link to="/cart">
                <button>Finalizar compra</button>
              </Link>
            )}
          </>
        ) : (
          <p>Sin stock</p>
        )}
      </></>
        )}

export default ItemDetail