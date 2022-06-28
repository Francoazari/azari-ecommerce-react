import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

function NavBar(){

    return(
        <header style={styles.container}>
            <img style={styles.imageLogo} src={logo} alt="logo" />
            <h1>Azari Ecommerce</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyleItem} href="#/">Inicio</a>
                <a style={styles.navStyleItem} href="#/">Categorias</a>
                <a style={styles.navStyleItem} href="#/">Contactanos</a>
                <a style={styles.navStyleItem} href="#/">Ayuda</a>
            </nav>
            <CartWidget />
        </header>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    navStyle: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    imageLogo: {        
        height: 70
    },
    navStyleItem: {
        margin: 10
    }
}

export default NavBar;

