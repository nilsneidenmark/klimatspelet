import styles from "./login.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";
import { useAuthenticated } from "../../context/AuthenticatedContext";

export default function Login() {
  const navigate = useNavigate();
  const { authenticated, setAuthenticated } = useAuthenticated(); // State for logged in status
  const { setDisplay } = useDisplay(); /// State for conditional rendering

  // on login submit, authenticates the user and redirects to profile page and sets avatar to header.
  function handleSubmit(e) {
    e.preventDefault();
    setAuthenticated(true);
    setTimeout(() => {
      navigate("/profile");
      setDisplay("avatar");
    }, [1000]);
  }
  return (
    <motion.section
      className={styles.login}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <h2>Välkommen tillbaka</h2>
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Användarnamn eller epost</label>
        <input
          readOnly
          value="Cr4zyfox09"
          id="username"
          type="text"
          minLength="2"
        />
        <label htmlFor="password">Lösenord</label>
        <input
          readOnly
          value="Password123!"
          id="password"
          type="password"
          minLength="8"
        />
        <button
          disabled={authenticated}
          className={styles.primarybtn}
          type="submit"
        >
          {authenticated ? "Loggar in..." : "Logga in"}
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
