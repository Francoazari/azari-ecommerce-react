import { useEffect, useState } from "react";
import ItemList from "./itemList";


function ItemListContainer(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }, []);

    return(
        <>
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer;