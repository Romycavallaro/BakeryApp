import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { customFetch, getProductsByCategory } from '../utils/promise';
import productos from "../utils/productos"
import { Link, useParams } from "react-router-dom";
import Spinner from './Spinner';


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() =>{
        setLoading(true);
        if(!categoryId) {
            customFetch(1000, productos)
            .then(resultado => {
                setItems(resultado);
                setLoading(false);
            })
            .catch((error) => console.log(error));
          } else {
            getProductsByCategory(categoryId)
              .then((resultado) => {
                setItems(resultado);
                setLoading(false);
              })
              .catch((error) => console.log(error));
          } 
}, [categoryId]);

    return (
        <div className="saludo">
            <h3 style={{textAlign: 'center', color: '#863e74', fontFamily: 'cursive', fontSize: '30px'}}>{props.greeting}</h3>
            {loading ? (
                <Spinner />
      ) : items.length <= 0 ? (
        <>
          <p>No encontramos productos en esta categoría</p>
          <Link to="/">
            <button>Ir al home</button>
          </Link>
        </>
      ) : (
        <ItemList products={items} />
      )}
    </div>
  );
};

export default ItemListContainer