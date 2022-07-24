import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { db } from "../firabase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        let q = null;
        if (idCategory) {
            q = query(productsCollection, where("category", "==", idCategory));
        }

        getDocs(q ? q : productsCollection)
            .then((result) => {
                const lista = result.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                });
                setProducts(lista);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoaded(false));
    }, [idCategory]);

    return <>{loaded ? <CircularProgress color="success" /> : <ItemList products={products} />}</>;
}

export default ItemListContainer;
