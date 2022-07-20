import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { idProduct } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.stock) data.stock = Math.floor(Math.random() * 50);
                setProduct(data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoaded(false));
    }, [idProduct]);

    return <>{loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} />}</>;
}

export default ItemDetailContainer;
