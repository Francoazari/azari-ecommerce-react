function Item(props){

    return(
        <div style={styles.article}>
            <img style={styles.articleImage} src={props.productInfo.image} alt={props.productInfo.title} />
            <p>{props.productInfo.title}</p>
            <div>${props.productInfo.price}</div>
            <p>{props.productInfo.description}</p>
        </div>
    );

}

const styles = {
    article: {
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "500px",
        border: "1px solid #000000",
        margin: "5px",
        padding: "10px",
        overflow: "hidden"
    }, 
    articleImage: {
        width: "250px",
        height: "200px",
        objectFit: "cover"

    }
};

export default Item;