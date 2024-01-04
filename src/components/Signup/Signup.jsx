import { useState } from "react";
import styles from "./signup.module.scss";
import { motion } from "framer-motion";
import AvatarPicker from "../AvatarPicker/AvatarPicker";
import eyeClosed from "../../assets/icons/eye-off.svg";
import eyeOpen from "../../assets/icons/eye.svg";
import x from "../../assets/icons/x.svg";

export default function Signup() {
  const [hidePW, setHidePW] = useState(true); // State for showing/hiding password of first input
  const [hidePW2, setHidePW2] = useState(true); // State for showing/hiding password of second input

  // toggles the display of hide/show icon in input field and toggles between input type text/password
  function handleClick(param) {
    if (param === "pw") {
      setHidePW((prevState) => !prevState);
    } else if (param === "repeat") {
      setHidePW2((prevState) => !prevState);
    }
  }

  return (
    <motion.section
      className={styles.signup}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
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
          <input
            type={hidePW ? "password" : "text"}
            id="signupPassword"
            minLength="2"
          ></input>
          <img
            onClick={() => handleClick("pw")}
            height="24px"
            src={hidePW ? eyeClosed : eyeOpen}
            alt="Show password"
          />
          <div className={styles.verifyInput}>
            <small>
              <img width="16px" height="16px" src={x} alt="check" />
              Minst 8 tecken
            </small>
            <small>
              {" "}
              <img width="16px" height="16px" src={x} alt="check" />
              Minst 1 specialtecken !#%&/?
            </small>
            <small>
              {" "}
              <img width="16px" height="16px" src={x} alt="check" />
              Minst 1 STOR bokstav
            </small>
          </div>
        </div>
        <div>
          <label htmlFor="repeatPassword">Repetera lösenord</label>
          <input
            type={hidePW2 ? "password" : "text"}
            id="repeatPassword"
            minLength="2"
          />
          <img
            onClick={() => handleClick("repeat")}
            height="24px"
            src={hidePW2 ? eyeClosed : eyeOpen}
            alt="Show password"
          />
          <div className={styles.verifyInput}>
            <small>
              {" "}
              <img width="16px" height="16px" src={x} alt="check" />
              Lösenorden stämmer överens
            </small>
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
