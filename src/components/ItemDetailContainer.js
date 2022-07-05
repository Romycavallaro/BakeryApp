import React, { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { collectionProductos } from './../configuraciones/firebase';
import { doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

    useEffect(() =>{
        
      const ref = doc(collectionProductos, id);
      getDoc(ref)
        .then((res) => {
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