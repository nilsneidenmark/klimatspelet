import styles from "./categories.module.scss";
import ocean from "../../assets/categories/category_ocean_125x125.webp";
import mangrove from "../../assets/categories/category_mangrove_125x125.webp";
import pineTree from "../../assets/categories/category_pine-tree_125x125.webp";
import buildings from "../../assets/categories/category_buildings_125x125.webp";
import glacier from "../../assets/categories/category_glacier_125x125.webp";
import desert from "../../assets/categories/category_desert_125x125.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CategoryOverlay from "../CategoriesOverlay/CategoriesOverlay";

export default function Categories() {
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <section className={styles.categoriesSection}>
      <CategoryOverlay trigger={buttonPopup} setTrigger={setButtonPopup}>
        <button onClick={() => navigate("/quiz")} className={styles.primarybtn}>
          Börja spela
        </button>
      </CategoryOverlay>
      <h1>Kategorier</h1>
      <div className={styles.categoriesContainer}>
        <button
          onClick={() => setButtonPopup(true)}
          className={styles.categories}
        >
          <img className={styles.active} src={ocean} alt="category" />
          <p>Världens hav</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={mangrove} alt="category" />
          <p>Mangrovträsk</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={pineTree} alt="category" />
          <p>Skogen</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={buildings} alt="category" />
          <p>Människan</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={glacier} alt="category" />
          <p>Glaciärer</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={desert} alt="category" />
          <p>Öknen</p>
          <p className={styles.comingSoon}>Kommer snart</p>
          <small>0/10</small>
        </button>
      </div>
    </section>
  );
}
