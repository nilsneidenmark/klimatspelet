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
  // Open or closes the < categoriesOverlay /> based on it states, deafult false = closed
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <section className={styles.categoriesSection}>
      {/* Triggers useState to show or close the overlay, and also redirect the user to route quiz */}
      <CategoryOverlay trigger={buttonPopup} setTrigger={setButtonPopup}>
        <button onClick={() => navigate("/quiz")} className={styles.primarybtn}>
          Start Quiz
        </button>
      </CategoryOverlay>
      <h1>Categories</h1>
      <div className={styles.categoriesContainer}>
        {/* Change useState to true = opening the < categoriesOverlay /> */}
        <button
          onClick={() => setButtonPopup(true)}
          className={styles.categories}
        >
          <img className={styles.active} src={ocean} alt="category" />
          <p className={styles.available}>Oceans</p>
          <small className={styles.available}>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={mangrove} alt="category" />
          <p>Mangroves</p>
          <p className={`${styles.comingSoon} ${styles.color1}`}>Coming soon</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={pineTree} alt="category" />
          <p>Forrests</p>
          <p className={`${styles.comingSoon} ${styles.color2}`}>Coming soon</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={buildings} alt="category" />
          <p>Humans</p>
          <p className={`${styles.comingSoon} ${styles.color3}`}>Coming soon</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={glacier} alt="category" />
          <p>Glaciers</p>
          <p className={`${styles.comingSoon} ${styles.color4}`}>Coming soon</p>
          <small>0/10</small>
        </button>

        <button disabled className={styles.categories}>
          <img src={desert} alt="category" />
          <p>Deserts</p>
          <p className={`${styles.comingSoon} ${styles.color5}`}>Coming soon</p>
          <small>0/10</small>
        </button>
      </div>
    </section>
  );
}
