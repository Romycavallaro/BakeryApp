import productos from "./productos";

export const customFetch = (time, task) => {
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(task)
            }, time) 
    })
};

export const getProductsById = (id) => {
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res(productos.find((product) => product.id === id));
            }, 1000) 
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(
          productos.filter(
            (product) => product.categoryId === categoryId)
        );
      }, 1000);
    });
  };


