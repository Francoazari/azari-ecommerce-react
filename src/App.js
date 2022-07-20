import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <div style={styles.container}>
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

const styles = {
    container: {
        width: "80vw"
    }
};

export default App;
