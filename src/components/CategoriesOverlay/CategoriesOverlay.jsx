import styles from "./categoriesOverlay.module.scss"
import CloseButton from "react-bootstrap/CloseButton";
import ocean from "../../assets/categories/category_ocean_125x125.webp";

// props function for < categories />
export default function CategoryOverlay(props) {

  // prosp.trigger that lisens to useState in < categories />, if useState=true render code below
  return (props.trigger) ? (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayWrapper}>
      {/* Triggers useState in < categories /> to close the overlay */}
      <CloseButton className={styles.closeBTN} onClick={() => props.setTrigger(false)}/>
      <img src={ocean} alt="category" className={styles.categoryIcon}/>
        <h2>Världens hav</h2>
          <p>Havet spelar en stor roll när det kommer till klimatförändingarna. 
            En stor del av den globala uppvärmningen samlas i havet och vattentemperaturerna stiger. 
            Även havsnivån ökar när isar och glaciärer smälter. Lär dig mer om klimatförändringar i quizzet!
          </p>
        {/* Rendering more information connected to < categoriesOverlay /> in < categories /> */}
        { props.children }
      </div>
    </div>
  ) : "";
}