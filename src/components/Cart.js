import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexto } from "../context/CartContext";
import ItemCart from "./ItemCart";
import { db } from "../firabase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import swal from "sweetalert";

const Cart = () => {
    const { products, removeItem, getTotal, clear } = useContext(contexto);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            buyer: {
                name: `${event.target["name"].value} ${event.target["lastname"].value}`,
                phone: event.target["phone"].value,
                email: event.target["email"].value
            },
            items: products,
            date: serverTimestamp(),
            total: getTotal()
        })
            .then((result) => {
                clear();
                swal("Compra realizada con éxito", "ID Venta: " + result.id, "success").then((value) => {
                    navigate("/");
                });
            })
            .catch((err) => {
                swal("¡Lo sentimos!", "Ha ocurrido un error con su compra. Por favor intente nuevamente.", "error");
                console.error(err);
            });
    };

    return (
        <>
            <h2>Cart</h2>
            {products.length > 0 && (
                <div style={styles.container}>
                    <div style={styles.cartContainer}>
                        {products.map((product) => {
                            return <ItemCart key={product.id} item={product} removeItem={removeItem} />;
                        })}
                        <div style={styles.total}>Total: ${getTotal().toFixed(2)}</div>
                    </div>
                    <div style={styles.datosUsuario}>
                        <h3>Finalizar compra</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input style={styles.inputForm} type="text" name="name" placeholder="Nombre" required />
                            <input style={styles.inputForm} type="text" name="lastname" placeholder="Apellido" required />
                            <input style={styles.inputForm} type="email" name="email" placeholder="Email" required />
                            <input style={styles.inputForm} type="phone" name="phone" placeholder="Telefono" required />
                            <button style={styles.buttonForm} type="submit">
                                Confirmar compra
                            </button>
                        </form>
                    </div>
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
    container: {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
    },
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
        minWidth: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
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
    },
    inputForm: {
        width: "100%",
        height: "30px",
        borderRadius: "5px",
        border: "1px solid #C7C7C7",
        padding: "5px",
        marginBottom: "10px"
    },
    buttonForm: {
        width: "100%",
        height: "30px",
        borderRadius: "5px",
        border: "0",
        padding: "5px",
        marginBottom: "10px",
        backgroundColor: "#027900",
        color: "#fff"
    }
};

export default Cart;
