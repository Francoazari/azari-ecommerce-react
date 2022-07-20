import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        fetch(
            !idCategory
                ? "https://fakestoreapi.com/products?limit=5"
                : `https://fakestoreapi.com/products/category/${idCategory}`
        )
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [idCategory]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;
