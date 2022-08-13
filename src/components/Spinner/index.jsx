
import { CircularProgress } from "@mui/material";
import styles from "./Spinner.module.css";

function Spinner() {
    return (
        <div className={styles.container}>
            <CircularProgress color="success" />
        </div>
    );
}

export default Spinner;
