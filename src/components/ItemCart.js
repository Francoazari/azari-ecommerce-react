import DeleteIcon from "@mui/icons-material/Delete";

const ItemCart = ({ item, removeItem }) => {
    return (
        <div style={styles.itemCart}>
            <div style={styles.imgContainer}>
                <img style={styles.image} src={item.image} alt={item.title} />
            </div>
            <div style={styles.information}>
                <span style={styles.title}>{item.title}</span>
                <span style={styles.quantity}>{item.quantity}</span>
                <span style={styles.price}>${item.price}</span>
                <span style={styles.totalPrice}>${item.price * item.quantity}</span>
                <div style={styles.removeButton}>
                    <button style={styles.remove} onClick={() => removeItem(item.id)}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    itemCart: {
        width: "100%",
        height: "50px",
        display: "flex",
        gap: "5px",
        backgroundColor: "rgb(235, 235, 235)",
        padding: "5px",
        borderRadius: "5px",
        marginBottom: "10px"
    },
    imgContainer: {
        width: "50px",
        backgroundColor: "#FFF",
        padding: "5px",
        borderRadius: "5px"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    information: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "left"
    },
    title: {
        width: "60%"
    },
    quantity: {
        width: "10%"
    },
    price: {
        width: "10%"
    },
    totalPrice: {
        width: "10%"
    },
    removeButton: {
        width: "10%"
    }
};

export default ItemCart;
