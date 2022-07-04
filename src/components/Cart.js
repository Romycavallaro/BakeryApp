import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const Cart = () => {
  const resultado = useContext(contexto);
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
              <div key={item.id}>
                <div>
                  <div>Item id: {item.id}</div>
                  <div>{item.name}</div>
                  <div>{item.descripcion}</div>
                  <div>{item.price}</div>
                  <div>{item.quantity}</div>
                </div>

                <button onClick={() => resultado.removeItem(item.id)}>Cancelar Item</button>
              </div>
            ))}
            <div>
              <p>Subtotal: $ {resultado.totalPrice}</p>
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
