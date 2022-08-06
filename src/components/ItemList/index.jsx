import Item from "../Item";
import styles from "./ItemList.module.css";

function ItemList({ products }) {
    return (
        <div className={styles.listItems}>
            {products &&
                products.map((product) => {
                    return <Item key={product.id} productInfo={product} />;
                })}
        </div>
    );
}

export default ItemList;
