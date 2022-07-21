import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

const CartWidget = () => {
    const { getQuantityProducts } = useContext(contexto);

    return (
        <Link to="/cart">
            <div style={styles.cart}>
                <span style={styles.cartSpan}>{getQuantityProducts()}</span>
                <ShoppingCartIcon sx={{ size: 30 }} />
            </div>
        </Link>
    );
};

const styles = {
    cart: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        color: "black"
    },
    cartSpan: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "15px",
        heihgt: "15px",
        fontSize: "12px",
        color: "white",
        borderRadius: "50%",
        backgroundColor: "#194F7D",
        padding: "2px",
        lineHeihgt: "5px"
    }
};

export default CartWidget;
