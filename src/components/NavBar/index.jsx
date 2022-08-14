import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { db } from "../../firabase/firebase";
import { getDocs, collection } from "firebase/firestore";


function NavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesCollection = collection(db, "categories");

        getDocs(categoriesCollection)
        .then((result) => {
            let categoriesArr = [];

            for(let doc of result.docs){
                categoriesArr.push({ id: doc.id, ...doc.data()});
            }
            setCategories(categoriesArr);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <header className={styles.container}>
            <Link to={"/"}>
                <img className={styles.imageLogo} src={logo} alt="logo" />
            </Link>
            <h3>Az Ecommerce</h3>
            <nav className={styles.navStyle}>
                <Link to={"/"} className={styles.navStyleItem}>
                    <p>Inicio</p>
                </Link>
                {
                    categories && categories.map((category) => {
                        return <Link key={category.id} to={category.route} className={styles.navStyleItem}>
                                    <p>{category.name}</p>
                                </Link>
                    })
                }
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;
