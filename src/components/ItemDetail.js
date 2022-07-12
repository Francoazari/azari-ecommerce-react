function ItemDetail({product}) {

    return(
        <>
            <div style={styles.itemContainer}>
                <div style={styles.itemImage}>
                    <img src={product.image} style={styles.image} alt={product.title} />
                </div>                
                <div style={styles.itemInformacion}>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            
        </>
    );
}

const styles = {
    itemContainer: {
        width: "50vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }, 
    itemImage: {
        width: "30vw",

    },
    image: {
        width: "15vw"
    },
    itemInformacion: {

    }
}

export default ItemDetail;