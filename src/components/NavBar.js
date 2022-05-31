import logo from "../img/pasteleria.png"
import carro from "../img/carros.png"

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
                <img src={carro} alt="carrito de compra" />
            </ul>
        </nav>
)
}

export default NavBar