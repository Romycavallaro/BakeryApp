import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MiProvider from "./components/CartContext"
import Cart from "./components/Cart"


const App = () => {
    return (
    <BrowserRouter>
        <MiProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Hola..Explora y Tentate!!"} />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </MiProvider>
    </BrowserRouter>
    )
}  

export default App