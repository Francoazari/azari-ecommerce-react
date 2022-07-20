import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    const [quantityToAdd, setQuantityToAdd] = useState(0);

    return (
        <div style={styles.itemContainer}>
            <div style={styles.itemImage}>
                <img src={product.image} style={styles.image} alt={product.title} />
            </div>
            <div style={styles.itemInformacion}>
                <h2 style={styles.title}>{product.title}</h2>
                <p style={styles.price}>${product.price}</p>
                <p style={styles.description}>{product.description}</p>
                {quantityToAdd === 0 && (
                    <ItemCount stock={product.stock} initial={1} onAdd={setQuantityToAdd} />
                )}
                {quantityToAdd > 0 && (
                    <Link to="/cart">
                        <button style={styles.terminarCompra}>Terminar mi compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
}

const styles = {
    itemContainer: {
        width: "100%",
        maxHeight: "400px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "50px"
    },
    itemImage: {
        width: "30%",
        paddingTop: "20px"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover"
    },
    itemInformacion: {
        width: "60%",
        margin: "15px",
        padding: "5px",
        textAlign: "left"
    },
    title: { fontSize: "1em" },
    price: { fontWeight: "bold" },
    terminarCompra: {
        width: "100%",
        height: "35px",
        borderRadius: "5px",
        border: "0",
        backgroundColor: "#0e3d0c",
        color: "white",
        marginTop: "20px"
    }
};

export default ItemDetail;
