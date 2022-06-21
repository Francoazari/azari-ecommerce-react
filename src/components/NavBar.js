import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../assets/logo.png";

function NavBar(){

    return(
        <header style={styles.container}>
            <img style={styles.imageLogo} src={logo} alt="logo" />
            <h1>Azari Ecommerce</h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyleItem} href="">Inicio</a>
                <a style={styles.navStyleItem} href="">Categorias</a>
                <a style={styles.navStyleItem} href="">Contactanos</a>
                <a style={styles.navStyleItem} href="">Ayuda</a>
            </nav>
            { <ShoppingCartIcon sx={{ size: 30 }} /> }
        </header>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDireeection: "row",
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

