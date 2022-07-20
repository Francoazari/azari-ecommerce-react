import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const sacarProducto = () => {
        if (count - 1 >= initial) setCount(count - 1);
    };

    const agregarProducto = () => {
        if (stock >= count + 1) setCount(count + 1);
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.containerCount}>
                    <div style={styles.button} onClick={sacarProducto}>
                        -
                    </div>
                    <div style={styles.count}>{count}</div>
                    <div style={styles.button} onClick={agregarProducto}>
                        +
                    </div>
                </div>
                {count <= stock && (
                    <button
                        style={styles.buttonAdd}
                        onClick={() => {
                            onAdd(count);
                        }}
                    >
                        Agregar al carrito
                    </button>
                )}
            </div>
        </>
    );
}

const styles = {
    container: {
        width: "250px",
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        borderRadius: "5px",
        backgroundColor: "#ebebeb",
        padding: "10px"
    },
    containerCount: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#000"
    },
    button: {
        width: "20%",
        padding: "5px 10px 5px 10px",
        color: "#000",
        fontWeight: "bold",
        borderRadius: "5px",
        backgroundColor: "#FFF",
        textAlign: "center",
        height: "25px",
        cursor: "pointer"
    },
    count: {
        padding: "5px",
        fontWeight: "bold"
    },
    buttonAdd: {
        width: "100%",
        height: "35px",
        padding: "5px 0 5px 0",
        marginTop: "5px",
        border: "0",
        borderRadius: "5px",
        color: "black",
        backgroundColor: "#FFF",
        cursor: "pointer"
    }
};

export default ItemCount;
