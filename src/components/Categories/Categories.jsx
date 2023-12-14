import styles from "./categories.module.scss";
import ocean from "../../assets/category_ocean.webp";
import mangrove from "../../assets/category_mangrove.webp";
import pineTree from "../../assets/category_pine-tree.webp";
import buildings from "../../assets/category_buildings.webp";
import glacier from "../../assets/category_glacier.webp";
import desert from "../../assets/category_desert.webp";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Kategorier</h1>
      <div className={styles.categoriesSection}>
        <button onClick={() => navigate("/quiz")} className={styles.categories}>
          <img className={styles.active} src={ocean} alt="category" />
          <p>Världens hav</p>
          <small>0/12</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={mangrove} alt="category" />
          <p>Energi</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/12</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={pineTree} alt="category" />
          <p>Skogen</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/12</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={buildings} alt="category" />
          <p>Människan</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/12</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={glacier} alt="category" />
          <p>Glaciärer</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/12</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={desert} alt="category" />
          <p>Öknen</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/12</small>
        </button>
      </div>
    </section>
  );
}
