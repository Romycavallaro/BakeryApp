import React, { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { Link, useParams } from "react-router-dom";
import Spinner from './Spinner';
import { db } from "./../configuraciones/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() =>{
      setLoading(true);
      
      const ref = categoryId
      ? query(collection(db, 'productos'), where('categoryId', '==', categoryId))
      : collection(db, 'productos');

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
        console.log(error);
      });
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