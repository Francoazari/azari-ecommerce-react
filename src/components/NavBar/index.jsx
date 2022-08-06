import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <header className={styles.container}>
            <Link to={"/"}>
                <img className={styles.imageLogo} src={logo} alt="logo" />
            </Link>
            <h3>Az Ecommerce</h3>
            <nav className={styles.navStyle}>
                <Link to={"/"} className={styles.navStyleItem}>
                    <p>Inicio</p>
                </Link>
                <Link to="/category/jewelery" className={styles.navStyleItem}>
                    <p>Jewelery</p>
                </Link>
                <Link to="/category/electronics" className={styles.navStyleItem}>
                    <p>Electronics</p>
                </Link>
                <Link to={"/"} className={styles.navStyleItem}>
                    <p>Contactanos</p>
                </Link>
                <Link to={"/"} className={styles.navStyleItem}>
                    <p>Ayuda</p>
                </Link>
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;
