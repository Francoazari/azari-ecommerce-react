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
        const idABorrar = newProducts.findIndex((product) => product.id === id);
        newProducts.splice(idABorrar, 1);
        setProducts(newProducts);
    };

    const clear = () => setProducts([]);

    const getElement = (id) => products.find((item) => item.id === id);

    const isInCart = (id) => products.some((item) => item.id === id);

    const getQuantityProducts = () => products.reduce((accum, currentValue) => accum + currentValue.quantity, 0);

    const getTotal = () => products.reduce((accum, currentValue) => accum + currentValue.price * currentValue.quantity, 0);

    return <Provider value={{ products, addItem, removeItem, clear, isInCart, getElement, getQuantityProducts, getTotal }}>{children}</Provider>;
};

export default CustomProvider;
