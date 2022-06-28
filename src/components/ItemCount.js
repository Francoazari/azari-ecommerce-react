import { useState } from "react";


function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    const sacarProducto = () => {
        if(count - 1 >= initial) 
            setCount(count - 1);
    }

    const agregarProducto = () => {
        if(stock >= count + 1) 
            setCount(count + 1);
    }        

    return(
        <>
            <div style={styles.container}>
                <div style={styles.containerCount}>
                    <div style={styles.button} onClick={sacarProducto}>-</div>
                    <div style={styles.count}>{count}</div>
                    <div style={styles.button} onClick={agregarProducto}>+</div>
                </div>
                {(count < stock) && <button style={styles.buttonAdd} onClick={onAdd}>Agregar al carrito</button>}
            </div>
            
        </>
    );
}

const styles = {
    container: {
        width: "20vw",
        display: "flex",
        flexDirection: "column"
    },
    containerCount: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black"
    },
    button: {
        padding: "5px 10px 5px 10px",
        color: "blue",
        fontWeight: "bold"
    },
    count: {
        padding: "5px",
    },
    buttonAdd: {
        width: "100%",
        padding: "5px 0 5px 0",
        marginTop: "5px",
        border: "1px solid blue",
        color: "blue"
    }
}

export default ItemCount;