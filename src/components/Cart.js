import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const Cart = () => {
  const resultado = useContext(contexto);
  console.log(resultado);
  console.log(resultado.carrito);
  console.log(resultado.carrito.length);
  console.log(resultado.carrito.map((item) => item.item.id));
  return (
    <>
      {resultado.carrito.lenght < 1 ? (
        <div>
          <p>
            Tu carrito está vacío. Por favor, agregá algún producto para poder
            continuar.
          </p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
          <div>
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Subtotal</p>
          </div>
          <div>
            {resultado.carrito.map((item) => (
              <div key={item.item.id}>
                <div>
                  <div>Item id: {item.item.id}</div>
                  <div>{item.item.name}</div>
                  <div>{item.item.descripcion}</div>
                  <div>{item.item.price}</div>
                  <div>{item.item.quantity}</div>
                </div>

                <button onClick={() => resultado.removeItem(item.item.id)}>Cancelar Item</button>
              </div>
            ))}
            <div>
              <p>Subtotal: ${resultado.totalPrice}</p>
              <p>Total: ${resultado.totalPrice}</p>
              <button>Comprar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
