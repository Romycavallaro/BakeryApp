import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext} from 'react';
import { db } from '../configuraciones/firebase';
import { contexto } from './CartContext';
import OrderForm from "./Form/OrderForm";
import './Cart.css'

const Cart = () => {

  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState(false);

  const { carrito, removeItem, totalPrice, clearItems} = useContext(contexto);

  const handleChange = (e) => {
      const { name, email, recEmail, value } = e.target;
      setUserData({
          ...userData,
          [name]: value,
          [email] : value,
          [recEmail] : value,
      });
  };

  console.log(userData);
  console.log(handleChange);

  const handleSubmit = (e) => {
      e.preventDefault();

      if (validate()) {
    
      const objOrden = {
          buyer: {
              name: userData.name,
              phone: userData.phone,
              email: userData.email,
              recEmail: userData.recEmail,
          },
          carrito,
          total: totalPrice,
          date: serverTimestamp(),
      };

      const ref = collection(db, 'orders');
      addDoc(ref, objOrden, error)
      .then((response) => {
          setOrderId(response.id);
          clearItems();
          setError(false)
      })
      .catch(error => {
        setError(error);
    })
  } 
  else {
    setError(true)
  }
}

const orderForm = () => {
  const form = document.querySelector("#form");
  form.classList.remove("form")
}

console.log(handleSubmit);

  const validate = () => {
    if (userData.name.trim().length && userData.phone.trim().length && userData.email.trim().length && userData.email === userData.recEmail) {
        return true
    } else {
        return false
    }
}

console.log(validate);

  if (orderId !== '') {
      return <div className='ordenFinalizada'>
        <h1>Tu compra se realizó con Éxito!</h1>
        <h1>Gracias {userData.name}</h1>
        <br />
        <br />
        <h1>Tu orden de compra es:</h1>
        <h1>{orderId}</h1> 
      </div>;
  }

  return (
    <>
      {carrito.length < 1 ? (
        <div>
          <p className='carritoVacio'>Tu carrito está vacío. Por favor, agregá algún producto para poder
            continuar.</p>
          
        </div>
      ) : (
        <div className='ContenedorPrincipal'> 
            {carrito.map((item) => (
              <div className='clave' key={item.id}>
                  <div >ID: {item.id}</div>
                  <div>Producto: {item.name}</div>
                  <div>Descripción: {item.descripcion}</div>
                  <div>Precio Unitario: $ {item.price}</div>
                  <div>Cantidad: {item.quantity}</div>
                  <p>Total a pagar: ${totalPrice}</p>  
                  <div className='botonesCompra'>
                    <button className='botonIniciar' onClick={() => removeItem(item.id)}>Cancelar Item</button>
                    <button className='botonIniciar' onClick={orderForm}>Iniciar Compra</button>
                </div>           
        </div>
      ))} 
        <div className='form' id="form">
        <OrderForm
            handleChange={handleChange}
            userData={userData}
            handleSubmit={handleSubmit}
        />
        </div>
        </div>       
      )}
    </>
  );
};

export default Cart;
