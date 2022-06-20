import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
    return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Hola..Explora y Tentate!!"} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>
    </BrowserRouter>
    )
}  

export default App