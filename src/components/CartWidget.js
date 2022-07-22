import React, { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import shopping from "../img/shopping.png"

const CartWidget = () => {

    const resultado = useContext(contexto)

    return (
    <Link to="/cart" style={{textDecoration: 'none', color: '#380919'}}> <img src={shopping} alt="carrito" style={{height: '25px', marginTop: '10px'}} /> {resultado.cantidadDisponible} </Link>
  );
};


export default CartWidget