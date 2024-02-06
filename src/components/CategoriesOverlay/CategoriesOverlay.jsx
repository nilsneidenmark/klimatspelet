import styles from "./categoriesOverlay.module.scss";
import ocean from "../../assets/categories/category_ocean_125x125.webp";
import CloseButton from "../../assets/icons/x-black.svg";
// props function for < categories />
export default function CategoryOverlay(props) {
  // prosp.trigger that lisens to useState in < categories />, if useState=true render code below
  return props.trigger ? (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayWrapper}>
        {/* Triggers useState in < categories /> to close the overlay */}

        <img
          src={CloseButton}
          alt="close"
          onClick={() => props.setTrigger(false)}
          className={styles.CloseButton}
          style={{ cursor: "pointer" }}
        />
        <img src={ocean} alt="category" className={styles.categoryIcon} />
        <h2>Oceans</h2>
        <p>
          The ocean plays a major role in regulating the worlds climate. A lot
          of the rising temperatures are stored in the ocean and that has a huge
          affect on its ecosystems.
        </p>
        <p>Learn more by taking the quiz!</p>
        {/* Rendering more information connected to < categoriesOverlay /> in < categories /> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
