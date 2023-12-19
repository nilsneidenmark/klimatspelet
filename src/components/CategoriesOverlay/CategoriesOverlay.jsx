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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi 
              laborum aliquid nostrum doloribus a illum, provident autem ex dolores rem laudantium odio 
              aspernatur voluptates animi vel perspiciatis labore dolore?
          </p>
        { props.children }
      </div>
    </div>
  ) : "";
}