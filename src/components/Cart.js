import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext} from 'react';
import { db } from '../configuraciones/firebase';
import { contexto } from './CartContext';
import OrderForm from "./Form/OrderForm";
import './Cart.css'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"

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

  const validate = () => {
    if (userData.name.trim().length && userData.phone.trim().length && userData.email.trim().length && userData.email === userData.recEmail) {
        return true
    } else {
        toast.error('Los emails no coinciden. Ingrese mismo email en ambos casilleros');
    }
}

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
        <div className='carroVacio'>
          <p className='carritoVacio'>Tu carrito está vacío. Por favor, agregá algún producto para poder
            continuar.</p>
          <div className='botonIniciar'>
            <Link to="/"  style={{display: 'flex', padding: '10px', background: '#f5b2d7', color: '#380919', borderRadius: '5px', transition: 'background ease 1000ms', borderColor: '#380919', paddingLeft: '50px', border: '1px solid rgb(85, 18, 48)',
                                  textDecoration: 'none', width: '200px', marginLeft: '150px'}}>Volver al Home</Link>
          </div>
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
                    <div className='agregarQuitar'>
                      <button className='botonIniciar' onClick={() => removeItem(item.id)}>Cancelar Item</button>
                      <div className='botonIniciar'>
                      <Link to="/"  style={{display: 'flex', padding: '10px', background: '#f5b2d7', color: '#380919', borderRadius: '5px', transition: 'background ease 1000ms', borderColor: '#380919', textDecoration: 'none', border: '1px solid rgb(85, 18, 48)'}}>Agregar mas productos</Link>
                      </div>
                    </div>
                    <div className='compra'> 
                      <button className='botonIniciar' onClick={orderForm}>Iniciar Compra</button>
                    </div>
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
