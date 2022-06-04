import logo from "../img/pasteleria.png"
import CartWidget from "./CartWidget"



const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="Marca">
                <img src={logo} alt="Logo" />
                <h2>DAS Bakery</h2> 
            </div>
            <ul className="menu" type="none">
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Ofertas</a>
                </li>
                <li>
                    <a href="#">Quienes Somos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <CartWidget />
            </ul>
        </nav>
)
}

export default NavBar