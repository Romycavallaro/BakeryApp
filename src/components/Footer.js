import React from "react"
import logo from "../img/pasteleria.png"
import twitter from "../img/twitter.png"

const Footer = () => {
    return (
    <nav>
        <nav className="redes">
            <img className="logo" src={logo} alt="Logo" />
            <div className="redsocial">
                <ul type="none">
                <li className="footer">Contacto</li>
                <li className="footer">Tel: 011-1234-5678</li>
                <li className="footer">Dirección: Calle 123</li>
                <li className="footer">Mail: dal@gmail.com</li>
                </ul>
            </div>
            <div className="iconos">
                  <img className="rs" src={twitter} alt="Logo twitter" />
            </div>
        </nav>
        <nav className="derechos">
            <p className="footer">Todos los derechos reservados a CoderHouse</p>
        </nav>
    </nav>
)
}

export default Footer;