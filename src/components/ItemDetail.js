import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CartContext';

const ItemDetail = ({id, name, img, price, descripcion, stock}) => {
  const [ amount, setAmount] = useState(0);
  const resultado = useContext(contexto)

  const onAdd = (selectedQuantity) => {
    setAmount(selectedQuantity);
  };
  
  const agregarItemCarrito = () => {
    resultado.addItem({id, name, price, descripcion}, amount);
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
                <button onClick = {agregarItemCarrito}> Finalizar Compra </button>
              </Link>
            )}
          </>
        ) : (
          <p>Sin stock</p>
        )}
      </></>
        )}

export default ItemDetail