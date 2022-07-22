import React from "react"
import logo from "../img/pasteleria.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="Marca">
                <img src={logo} alt="Logo" />
                <Link to="/" style={{textDecoration: 'none', color: '#380919'}}><h2>DAL Bakery</h2> </Link>
                
            </div>
            <ul className="menu" type="none">
                <li>
                    <Link to="/category/Tortas" style={{textDecoration: 'none', color: '#380919'}}>Tortas</Link>
                </li>
                <li>
                    <Link to="/category/Muffins" style={{textDecoration: 'none', color: '#380919'}}>Muffins</Link>
                </li>
                <li>
                    <Link to="/category/Cookies" style={{textDecoration: 'none', color: '#380919'}}>Cookies</Link>
                </li>
                <li>
                    <Link to="/category/Ofertas" style={{textDecoration: 'none', color: '#380919'}}>Ofertas</Link>
                </li>
                <CartWidget />
            </ul>
        </nav>
)
}

export default NavBar