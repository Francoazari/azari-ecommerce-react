import { useEffect, useState } from "react";
import Item from "./item";


function ItemList(props){

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }, []);



    return(
        <div style={styles.listItems}>
            {products && products.map(product => {
                return <Item key={product.id} productInfo={product}/>
            })}
        </div>
    );
}

const styles = {
    listItems: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}

export default ItemList;