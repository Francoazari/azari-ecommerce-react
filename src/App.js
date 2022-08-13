import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomProvider from "./context/CartContext";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <CustomProvider>
                    <NavBar />
                    <div className={styles.container}>
                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            <Route path="/category/:idCategory" element={<ItemListContainer />} />
                            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                    <Footer />
                </CustomProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
