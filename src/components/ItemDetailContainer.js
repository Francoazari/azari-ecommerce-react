import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer(props) {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const { productId } = useParams();
    
    useEffect(() => {
            fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
            .finally(()=>setLoaded(false))
        
    }, [productId]);

    return(
        <>
            { loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} /> }
        </>
    );
}

export default ItemDetailContainer;