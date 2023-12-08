import styles from "./categories.module.scss";
import ocean from "../../assets/category_ocean.webp";

export default function Categories() {
    return (
        <section>
            <div className={styles.categories}>
                <img src={ocean} />
                <img src={ocean} />
                <img src={ocean} />
            </div>

            <div className={styles.categories}>
                <img src={ocean} />
                <img src={ocean} />
                <img src={ocean} />
            </div>
        </section>
    );
}