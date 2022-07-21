import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { contexto } from "../context/CartContext";

function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { idProduct } = useParams();
    const { getElement, isInCart } = useContext(contexto);
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.stock) {
                    data.stock = 15;
                    if (isInCart(data.id)) {
                        let item = getElement(data.id);
                        data.stock -= item.quantity;
                    }
                }
                setProduct(data);
            })
            .catch(() => navigate("/"))
            .finally(() => setLoaded(false));
    }, [idProduct, isInCart, getElement, navigate]);

    return <>{loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} />}</>;
}

export default ItemDetailContainer;
