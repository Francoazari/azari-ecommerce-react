import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexto } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { db } from "../../firabase/firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import swal from "sweetalert";
import styles from "./Cart.module.css";

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
                const idVenta = result.id;
                products.forEach((product) => {
                    const updateCollection = doc(db, "products", product.id);
                    updateDoc(updateCollection, { stock: product.stock - product.quantity }).then(() => {
                        clear();
                        swal("Compra realizada con éxito", "ID Venta: " + idVenta, "success").then(() => {
                            navigate("/");
                        });
                    });
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
                <div className={styles.container}>
                    <div className={styles.cartContainer}>
                        {products.map((product) => {
                            return <ItemCart key={product.id} item={product} removeItem={removeItem} />;
                        })}
                        <div className={styles.total}>Total: ${getTotal().toFixed(2)}</div>
                    </div>
                    <div className={styles.datosUsuario}>
                        <h3>Finalizar compra</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input className={styles.inputForm} type="text" name="name" placeholder="Nombre" required />
                            <input className={styles.inputForm} type="text" name="lastname" placeholder="Apellido" required />
                            <input className={styles.inputForm} type="email" name="email" placeholder="Email" required />
                            <input className={styles.inputForm} type="phone" name="phone" placeholder="Telefono" required />
                            <button className={styles.buttonForm} type="submit">
                                Confirmar compra
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {products.length === 0 && (
                <div className={styles.noProducts}>
                    <span>No hay articulos en el carrito.</span>
                    <Link to="/" className={styles.irTienda}>
                        <span>Ir a la tienda</span>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Cart;
