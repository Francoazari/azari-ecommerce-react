import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';
import ItemCount from "./components/ItemCount";

function App() {


  const onAdd = () => {
    console.log("Agrega al carrito");
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola Mundo!"/>
      <ItemCount 
        stock = {15}
        initial = {5}
        onAdd = {onAdd}
      />
    </div>
  );
}

export default App;
