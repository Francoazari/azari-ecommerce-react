import React, { useState, createContext } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addItem = (item, quantity) => {
        if (!item || !quantity) return;

        let newProducts = [...products];
        if (isInCart(item.id)) {
            let itemEncontrado = newProducts.find((newProduct) => newProduct.id === item.id);
            itemEncontrado.quantity += quantity;
        } else {
            newProducts = [...newProducts, { ...item, quantity: quantity }];
        }
        setProducts(newProducts);
    };

    const removeItem = (id) => {
        if (!id || !isInCart(id)) return;
        let newProducts = [...products];
        newProducts = newProducts.splice(
            newProducts.findIndex((product) => product.id === id),
            1
        );
        setProducts(newProducts);
    };

    const clear = () => setProducts([]);

    const getElement = (id) => products.find((item) => item.id === id);

    const isInCart = (id) => products.some((item) => item.id === id);

    const getQuantityProducts = () => products.length;

    return <Provider value={{ addItem, removeItem, clear, isInCart, getElement, getQuantityProducts }}>{children}</Provider>;
};

export default CustomProvider;
