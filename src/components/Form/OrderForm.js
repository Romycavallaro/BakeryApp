import React from 'react';
import './OrderForm.css';

const OrderForm = ({ handleChange, userData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='formulario'>
      <div>
        <label className='form'>Nombre</label>
        <br />
        <input className='input'
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
          value={userData.name}
          required
        ></input>
      </div>
      <div>
        <label className='form'>Telefono</label>
        <br />
        <input className='input'
          type="number"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={handleChange}
          value={userData.phone}
          required
        ></input>
      </div>
      <div>
        <label className='form'>Email</label>
        <br />
        <input className='input'
          type="email"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          required
        ></input>
      </div>
      <div>
        <label className='form'>Reconfirma Email</label>
        <br />
        <input className='input'
          type="recEmail"
          placeholder="Ingrese nuevamente su email"
          name="recEmail"
          onChange={handleChange}
          value={userData.recEmail}
          required
        ></input>
        
      </div >
      <button className='botonFinalizar'>Finalizar Compra</button>
      </div>
    </form>
  );
};

export default OrderForm;