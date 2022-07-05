import ItemList from "./itemList";


function ItemListContainer(props) {



    return(
        <>
            <h1>{props.greeting}</h1>
            <ItemList />
        </>
    );
}

export default ItemListContainer;