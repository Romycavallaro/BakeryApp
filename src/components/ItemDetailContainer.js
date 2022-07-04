import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { db } from './../configuraciones/firebase';
import { doc, getDoc, collection } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

    useEffect(() =>{
        
        getDoc(doc(collection(db, 'productos'), id))
        .then((res) => {
          console.log(res.data(), res.id);
          setItem({
            id: res.id,
            ...res.data(),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    return  (
        <div>
        {Object.keys(item).length === 0 ? <Spinner /> : <ItemDetail {...item} />}
      </div>
    )
};


export default ItemDetailContainer;