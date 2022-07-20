import { Link } from "react-router-dom";

function Item(props) {
    return (
        <div style={styles.article}>
            <div style={styles.image}>
                <img
                    style={styles.articleImage}
                    src={props.productInfo.image}
                    alt={props.productInfo.title}
                />
            </div>
            <p style={styles.title}>{props.productInfo.title}</p>
            <div style={styles.price}>${props.productInfo.price}</div>
            <Link to={`/item/${props.productInfo.id}`}>
                <button style={styles.verDetalle}>Ver detalle</button>
            </Link>
        </div>
    );
}

const styles = {
    article: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "130px",
        height: "180px",
        margin: "5px",
        padding: "10px",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "#ebebeb"
    },
    image: {
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    articleImage: {
        maxWidth: "90%",
        maxHeight: "90%",
        objectFit: "cover"
    },
    title: {
        fontSize: "0.8em",
        margin: "5px 0",
        textAlign: "left",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        height: "20px"
    },
    price: {
        fontSize: "0.8em",
        textAlign: "left"
    },
    verDetalle: {
        width: "100%",
        border: "0",
        backgroundColor: "#0b1c42",
        borderRadius: "5px",
        padding: "5px",
        color: "#FFF",
        marginTop: "10px",
        cursor: "pointer"
    }
};

export default Item;
