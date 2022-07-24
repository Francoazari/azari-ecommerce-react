import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header style={styles.container}>
            <Link to={"/"}>
                <img style={styles.imageLogo} src={logo} alt="logo" />
            </Link>
            <h3>Az Ecommerce</h3>
            <nav style={styles.navStyle}>
                <Link to={"/"} style={styles.navStyleItem}>
                    <p>Inicio</p>
                </Link>
                <Link to="/category/jewelery" style={styles.navStyleItem}>
                    <p>Jewelery</p>
                </Link>
                <Link to="/category/electronics" style={styles.navStyleItem}>
                    <p>Electronics</p>
                </Link>
                <Link to={"/"} style={styles.navStyleItem}>
                    <p>Contactanos</p>
                </Link>
                <Link to={"/"} style={styles.navStyleItem}>
                    <p>Ayuda</p>
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
        alignItems: "center",
        backgroundColor: "#EEEEEE",
        marginBottom: "30px"
    },
    navStyle: {
        display: "flex",
        justifyContent: "space-evenly",
        color: "black",
        textDecoration: "none"
    },
    imageLogo: {
        height: "40px"
    },
    navStyleItem: {
        color: "black",
        textDecoration: "none",
        margin: "5px 15px"
    }
};

export default NavBar;
