import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
    const { products, removeItem, getTotal } = useContext(contexto);

    return (
        <>
            <h2>Cart</h2>
            {products.length > 0 && (
                <div style={styles.cartContainer}>
                    {products.map((product) => {
                        return <ItemCart key={product.id} item={product} removeItem={removeItem} />;
                    })}
                    <div style={styles.total}>Total: ${getTotal().toFixed(2)}</div>
                </div>
            )}

            {products.length === 0 && (
                <div style={styles.noProducts}>
                    <span>No hay articulos en el carrito.</span>
                    <Link to="/" style={styles.irTienda}>
                        <span>Ir a la tienda</span>
                    </Link>
                </div>
            )}
        </>
    );
};

const styles = {
    noProducts: {
        width: "100%",
        textAlign: "center",
        fontSize: "15px",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
    },
    total: {
        width: "100%",
        textAlign: "right",
        fontWeight: "bold"
    },
    cartContainer: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    irTienda: {
        width: "100px",
        height: "25px",
        border: "0",
        backgroundColor: "#0b1c42",
        borderRadius: "5px",
        padding: "5px",
        color: "#FFF",
        marginTop: "10px",
        cursor: "pointer",
        textDecoration: "none"
    }
};

export default Cart;
