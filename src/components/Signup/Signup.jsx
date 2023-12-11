import styles from "./signup.module.scss";
import { motion } from "framer-motion";
import AvatarPicker from "../AvatarPicker/AvatarPicker";

export default function Signup() {
  return (
    <motion.section
      className={styles.signup}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2>Skapa ett konto</h2>
      <form>
        <div>
          <label htmlFor="mail">Studentmail</label>
          <input type="text" id="mail" minLength="2" />
        </div>
        <div>
          <label htmlFor="signupUsername">Användarnamn</label>
          <input type="text" id="signupUsername" minLength="2" />
        </div>
        <div>
          <label htmlFor="signupPassword">Lösenord</label>
          <input type="password" id="signupPassword" minLength="2" />
          <div>
            <small>Minst 8 tecken</small>
            <small>Minst 1 specialtecken !#%&/?</small>
            <small>Minst 1 STOR bokstav</small>
          </div>
        </div>
        <div>
          <label htmlFor="repeatPassword">Repetera lösenord</label>
          <input type="password" id="repeatPassword" minLength="2" />
          <div>
            <small>Lösenorden stämmer överens</small>
          </div>
        </div>
        <AvatarPicker />
        <button className="primarybtn">Skapa konto</button>
      </form>
      <small>Eller</small>
      <div className="divider" />
      <button>Skapa konto med Student 365+</button>
      <p>
        Har du redan ett konto? <strong>Logga in</strong>
      </p>
    </motion.section>
  );
}
