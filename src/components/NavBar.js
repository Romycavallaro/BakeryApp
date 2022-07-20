import React from "react"
import logo from "../img/pasteleria.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="Marca">
                <img src={logo} alt="Logo" />
                <Link to="/"><h2>DAL Bakery</h2> </Link>
                
            </div>
            <ul className="menu" type="none">
                <li>
                    <Link to="/category/Tortas">Tortas</Link>
                </li>
                <li>
                    <Link to="/category/Muffins">Muffins</Link>
                </li>
                <li>
                    <Link to="/category/Cookies">Cookies</Link>
                </li>
                <li>
                    <Link to="/category/Ofertas">Ofertas</Link>
                </li>
                <CartWidget />
            </ul>
        </nav>
)
}

export default NavBar