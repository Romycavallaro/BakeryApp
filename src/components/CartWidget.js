import React, { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const resultado = useContext(contexto)

    return (
       <Link to="/cart"> Carrito {resultado.cantidadDisponible} </Link>
    )
}

export default CartWidget