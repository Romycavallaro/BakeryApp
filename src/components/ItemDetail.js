import React, { useState } from 'react'
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CartContext';
import './Item.css'
import './ItemDetail.css'

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
    <><div className='card' key={id}>
      <h4>{name}</h4>
      <div className='container'>
      <img className='img-item' src={img} alt={name} />
      <p>{descripcion}</p>
      <p>Precio $ {price}</p>
      </div>
    </div><>
        {stock > 0 ? (
          <>
            {amount < 1 ? (
              <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            ) : (
              <div className='resumen'>
                <Link to="/">
                  <button className='addToCart'>Agregar más Productos</button>
                </Link>
                <Link to="/cart">
                  <button className='addToCart' onClick={agregarItemCarrito}>Terminar mi compra</button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <p>Sin stock</p>
        )}
      </></>
        )}

export default ItemDetail