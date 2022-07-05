import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext, Link } from 'react';
import { db } from '../configuraciones/firebase';
import { contexto } from './CartContext';
import OrderForm from "./Form/OrderForm";

const Cart = () => {

  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');

  const { carrito, removeItem, totalPrice, clearItems} = useContext(contexto);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({
          ...userData,
          [name]: value,
      });
  };

  console.log(userData);

  const handleSubmit = (e) => {
      e.preventDefault();
      const objOrden = {
          buyer: {
              name: userData.name,
              phone: userData.phone,
              email: userData.email,
          },
          carrito,
          total: totalPrice,
          date: serverTimestamp(),
      };

      const ref = collection(db, 'orders');
      addDoc(ref, objOrden)
      .then((response) => {
        console.log(response.id);
          setOrderId(response.id);
          clearItems();
      })
  };

  if (orderId !== '') {
      return <h1>Gracias por tu compra, tu número de envío es: {orderId}</h1>;
  }

  return (
    <>
      {carrito.lenght < 1 ? (
        <div>
          <p>Tu carrito está vacío. Por favor, agregá algún producto para poder
            continuar.</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div>
            {carrito.map((item) => (
              <div key={item.id}>
                <div>
                  <div>Item id: {item.id}</div>
                  <div>{item.name}</div>
                  <div>{item.descripcion}</div>
                  <div>{item.price}</div>
                  <div>{item.quantity}</div>
                </div>
                <button onClick={() => removeItem(item.id)}>Cancelar Item</button>
        </div>
      ))}
        <div>
          <p>Total: ${totalPrice}</p>
          <button>Iniciar Compra</button>
        </div>
        <OrderForm
            handleChange={handleChange}
            userData={userData}
            handleSubmit={handleSubmit}
        />
        </div>       
      )}
    </>
  );
};

export default Cart;
