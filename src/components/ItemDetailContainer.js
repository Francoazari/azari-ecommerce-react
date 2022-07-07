import { useState } from "react";
import ItemDetail from "./ItemDetail";



function ItemDetailContainer(props) {

    const [item, setItem] = useState();

    const getItem = (idItem) => {
        if(!idItem) return;

        fetch('https://fakestoreapi.com/products/' + idItem)
            .then(res=>res.json())
            .then(json=>setItem(json))

            console.log(item)
            


        return <ItemDetail  />
    }

    return(
        <>
            {() => getItem(3)}
            
        </>
    );
}

export default ItemDetailContainer;