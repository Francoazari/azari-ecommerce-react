import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header style={styles.container}>
            <Link to={"/"}>
                <img style={styles.imageLogo} src={logo} alt="logo" />
            </Link>
            <h1>Az Ecommerce</h1>
            <nav style={styles.navStyle}>
                <Link to={"/"}>
                    <p style={styles.navStyleItem}>Inicio</p>
                </Link>
                <Link to="/category/jewelery">
                    <p style={styles.navStyleItem}>Jewelery</p>
                </Link>
                <Link to="/category/electronics">
                    <p style={styles.navStyleItem}>Electronics</p>
                </Link>
                <Link to={"/"}>
                    <p style={styles.navStyleItem}>Contactanos</p>
                </Link>
                <Link to={"/"}>
                    <p style={styles.navStyleItem}>Ayuda</p>
                </Link>
            </nav>
            <CartWidget />
        </header>
    );
}

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    navStyle: {
        display: "flex",
        justifyContent: "space-evenly",
        color: "black",
        textDecoration: "none !important"
    },
    imageLogo: {
        height: 70
    },
    navStyleItem: {
        color: "black",
        textDecoration: "none",
        margin: 10
    }
};

export default NavBar;
