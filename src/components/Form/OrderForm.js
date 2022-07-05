import React from 'react';

const OrderForm = ({ handleChange, userData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <br />
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          onChange={handleChange}
          value={userData.name}
          required
        ></input>
      </div>
      <div>
        <label>Telefono</label>
        <br />
        <input
          type="number"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={handleChange}
          value={userData.phone}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          required
        ></input>
      </div>
      <button>Finalizar Compra</button>
    </form>
  );
};

export default OrderForm;