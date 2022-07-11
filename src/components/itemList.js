import Item from "./item";


function ItemList({products}){

    return(
        <div style={styles.listItems}>
            {products && products.map(product => {
                return <Item key={product.id} productInfo={product}/>
            })}
        </div>
    );
}

const styles = {
    listItems: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}

export default ItemList;