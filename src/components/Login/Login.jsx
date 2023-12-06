import styles from "./login.module.scss";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.section
      className={styles.login}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2>Välkommen tillbaka</h2>
      <h2>Logga in</h2>
      <form>
        <label htmlFor="username">Användarnamn eller epost</label>
        <input id="username" type="text" minLength="2" />
        <label htmlFor="password">Lösenord</label>
        <input id="password" type="password" minLength="8" />
        <button className={styles.primarybtn} type="submit">
          Logga in
        </button>
      </form>
      <div>
        <div>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox">Kom ihåg mig</label>
        </div>
        <p>Jag har glömt mitt lösenord</p>
      </div>
      <small>Eller</small>
      <div className={styles.divider} />
      <button>Logga in med student365</button>
      <p>
        Har du inget konto? <strong> Skapa ett konto</strong>
      </p>
    </motion.section>
  );
}
