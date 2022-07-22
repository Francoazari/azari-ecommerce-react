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
                <span style={styles.price}>${item.price.toFixed(2)}</span>
                <span style={styles.totalPrice}>${(item.price * item.quantity).toFixed(2)}</span>
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
        height: "35px",
        display: "flex",
        gap: "10px",
        backgroundColor: "rgb(235, 235, 235)",
        padding: "5px",
        borderRadius: "5px",
        marginBottom: "10px",
        fontSize: "13px"
    },
    imgContainer: {
        width: "15%",
        minWidth: "50px",
        maxWidth: "70px",
        backgroundColor: "#FFF",
        padding: "5px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        maxWidth: "100%",
        maxHeight: "100%"
    },
    information: {
        width: "85%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "left"
    },
    title: {
        width: "60%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    quantity: {
        width: "10%",
        textAlign: "center"
    },
    price: {
        width: "10%",
        overflow: "hidden"
    },
    totalPrice: {
        width: "10%",
        overflow: "hidden"
    },
    removeButton: {
        width: "10%",
        textAlign: "right"
    }
};

export default ItemCart;
