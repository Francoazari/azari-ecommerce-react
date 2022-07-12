import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer(props) {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const querystring = window.location.search;
    const params = new URLSearchParams(querystring);
    const [productId, setProductId] = useState();
    
    useEffect(() => {
        setProductId(params.get('productId'));    
    }, []);

    
    
    useEffect(() => {
        if(productId){
            fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
            .finally(()=>setLoaded(false))
        }
        
    }, [productId]);

    return(
        <>
            { loaded ? <CircularProgress color="success" /> : <ItemDetail product={product} /> }
        </>
    );
}

export default ItemDetailContainer;