import { Link } from "react-router-dom";

function Item(props) {
    return (
        <div style={styles.article}>
            <img
                style={styles.articleImage}
                src={props.productInfo.image}
                alt={props.productInfo.title}
            />
            <Link to={`/item/${props.productInfo.id}`}>
                <p style={styles.title}>{props.productInfo.title}</p>
            </Link>
            <div style={styles.price}>${props.productInfo.price}</div>
            <p style={styles.description}>{props.productInfo.description}</p>
        </div>
    );
}

const styles = {
    article: {
        display: "flex",
        flexDirection: "column",
        width: "130px",
        height: "200px",
        margin: "5px",
        padding: "10px",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "#ebebeb"
    },
    articleImage: {
        maxWidth: "100%",
        maxHeight: "40%",
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
    description: {
        height: "80px",
        fontSize: "0.8em",
        margin: "5px 0",
        textAlign: "left",
        overflowY: "auto",
        overflowX: "hidden",
        textOverflow: "ellipsis"
    }
};

export default Item;
