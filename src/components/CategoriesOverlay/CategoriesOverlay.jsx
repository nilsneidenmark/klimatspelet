import styles from "./categoriesOverlay.module.scss"
import CloseButton from "react-bootstrap/CloseButton";
import ocean from "../../assets/categories/category_ocean_125x125.webp";

export default function CategoryOverlay(props) {

  return (props.trigger) ? (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayWrapper}>
      <CloseButton className={styles.closeBTN} onClick={() => props.setTrigger(false)}/>
      <img src={ocean} alt="category" className={styles.categoryIcon}/>
        <h2>Världens hav</h2>
          <p>Havet spelar en stor roll när det kommer till klimatförändingarna. 
            En stor del av den globala uppvärmningen samlas i havet och vattentemperaturerna stiger. 
            Även havsnivån ökar när isar och glaciärer smälter. Lär dig mer om klimatförändringar i quizzet!
          </p>
        { props.children }
      </div>
    </div>
  ) : "";
}