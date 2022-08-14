import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firabase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import Spinner from "../Spinner";

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
            .catch((err) => console.error(err))
            .finally(() => setLoaded(false));
        return setLoaded(true);
    }, [idCategory]);

    return(
        <>
            <p>Bienvendidos a <b>Az Ecommerce</b>, un simulador de ecommerce, aquí podrás encontrar mucha variedad de productos y podrás <b>simular</b>:</p>
            <ul>
                <li>Ver productos</li>
                <li>Ver detalle de productos</li>
                <li>Agregar elementos al carrito</li>
                <li>Eliminar elementos del carrito</li>
                <li>Finalizar la compra (No hace falta completar con datos reales)</li>
            </ul>
            <p>
                Si encuentras algun error o si tienes alguna duda o consulta lo puedes preguntar al administrador del sitio.
            </p>
            
            {loaded ? <Spinner /> : <ItemList products={products} />}
        </>
        
    ) 
}

export default ItemListContainer;
