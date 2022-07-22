import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { Link, useParams } from "react-router-dom";
import Spinner from './Spinner';
import { collectionProductos } from "./../configuraciones/firebase";
import { getDocs, query, where } from "firebase/firestore";
import { toast } from 'react-toastify';


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() =>{
      setLoading(true);
      
      const ref = categoryId
      ? query(collectionProductos, where('categoryId', '==', categoryId))
      : collectionProductos;

    getDocs(ref)
      .then((res) => {
        const productosMapeados = res.docs.map((resultado) => {
          const aux = resultado.data();
          aux.id = resultado.id;

          return aux;
        });
        setLoading(false);
        setItems(productosMapeados);
      })
      .catch((error) => {
        toast.error('Error de consulta de productos');
      });
  }, [categoryId]);

    return (
      <><h3 className='saludo' >{props.greeting}</h3>
        {loading ? (
          <Spinner />
        ) : items.length <= 0 ? (
          <>
            <div className="sinProductos">
              <p>No encontramos productos en esta categoría</p>
              <Link to="/">
                <button className="Home">Ir al home</button>
              </Link>
              </div>
          </>
        ) : (
          <ItemList products={items} />
        )}
      </>
  );
};

export default ItemListContainer