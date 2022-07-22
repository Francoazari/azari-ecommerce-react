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
                    <Link to="/">
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
    }
};

export default Cart;
