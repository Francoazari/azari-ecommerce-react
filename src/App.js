import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {


  // const onAdd = () => {
  //   console.log("Agrega al carrito");
  // }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      {/* <ItemCount 
        stock = {15}
        initial = {5}
        onAdd = {onAdd}
      /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
