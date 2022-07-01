import React, { createContext, useState } from 'react'

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidadDisponible, setcantidadDisponible] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    const addItem = (item, quantity) => {
        const ItemAgregado = {
            item,
            quantity : quantity,
        }

        const nuevoCarrito = [carrito];

        if (isInCart(item.id)) {
            nuevoCarrito.forEach((product) => {
              if (product.id === item.id) product.quantity += quantity;
            });
            setCarrito(nuevoCarrito);
            setcantidadDisponible(cantidadDisponible + quantity);
            setTotalPrice(parseFloat((totalPrice + ItemAgregado.price * quantity).toFixed(2)));
          } else {
            nuevoCarrito.push({ ItemAgregado });
            setCarrito(nuevoCarrito);
            setcantidadDisponible(cantidadDisponible + quantity);
          }
        };


    const removeItem = (itemId) => {
      const nuevoCarrito = [carrito];
      const decreasePriceAndQuantity = nuevoCarrito.find(
      (item) => item.id === itemId
    );
    setTotalPrice(
      parseFloat(
        (
          totalPrice -
          decreasePriceAndQuantity.price * decreasePriceAndQuantity.quantity
        ).toFixed(2)
      )
    );
    setcantidadDisponible(cantidadDisponible - decreasePriceAndQuantity.quantity);

    const newNuevoCarrito = nuevoCarrito.filter((item) => item.id !== itemId);
    setCarrito(newNuevoCarrito);
  };

    const isInCart = (buscarId) => {
        return carrito.find(({ id }) => id === buscarId) ? true : false;
      };

    const clearItems = () => {
        setCarrito([]);
        setcantidadDisponible(0);
        setTotalPrice(0);
    }

    const valorContext = {
        carrito : carrito,
        cantidadDisponible : cantidadDisponible,
        totalPrice : totalPrice,
        addItem : addItem,
        removeItem : removeItem,
        clearItems : clearItems,
    };


    return (
        <Provider value={valorContext}>
            {children}
        </Provider>

    )
}

export default MiProvider 