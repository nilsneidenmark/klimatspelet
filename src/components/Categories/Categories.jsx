import styles from "./categories.module.scss";
import ocean from "../../assets/category_ocean.webp";
import pineTree from "../../assets/category_pine-tree.webp";
import buildings from "../../assets/category_buildings.webp";
import glacier from "../../assets/category_glacier.webp";
import desert from "../../assets/category_desert.webp";

export default function Categories() {
    return (
        <section>
            <h1>Kategorier</h1>
            <div className={styles.categoriesSection}>

                <div className={styles.categories}>
                    <img src={ocean} />
                    <p>Världens hav</p>
                    <small>2/12</small>
                </div>

                <div className={styles.categories}>
                    <img src={ocean} />
                    <p>Energi</p>
                    <p className={styles.comingSoon}>Kommer snart</p>
                    <small>2/12</small>
                </div>

                <div className={styles.categories}>
                    <img src={pineTree} />
                    <p>Skogen</p>
                    <p className={styles.comingSoon}>Kommer snart</p>
                    <small>2/12</small>
                </div>
            </div>

            <div className={styles.categoriesSection}>

            <div className={styles.categories}>
                    <img src={buildings} />
                    <p>Människan</p>
                    <p className={styles.comingSoon}>Kommer snart</p>
                    <small>2/12</small>
                </div>

                <div className={styles.categories}>
                    <img src={glacier} />
                    <p>Glaciärer</p>
                    <p className={styles.comingSoon}>Kommer snart</p>
                    <small>2/12</small>
                </div>

                <div className={styles.categories}>
                    <img src={desert} />
                    <p>Öknen</p>
                    <p className={styles.comingSoon}>Kommer snart</p>
                    <small>2/12</small>
                </div>

            </div>
        </section>
    );
}