import styles from "./logo.module.scss";
import logo from "../../assets/logo/logotyp_minst_utantext.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img width="50px" src={logo} alt="logotype"></img>
      <div>
        <h3>EcoExplorer</h3>
        <p>Lär dig mer om klimatet.</p>
      </div>
    </div>
  );
}
