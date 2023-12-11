import { useState, useRef } from "react";
import styles from "./settings.module.scss";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar_bear.webp";
import AvatarPicker from "../AvatarPicker/AvatarPicker";
import { useSettings } from "../../context/SettingsContext";

// Component for managing font settings, updates active style for clicked button and settings context for text
const SettingsFont = () => {
  const { active, setActive } = useSettings();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        className={styles.fontSection}
      >
        <div>
          <div>
            <p>Typsnitt</p>
            <div>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      font: { poppins: true, roboto: false },
                    },
                  })
                }
                className={active.text.font.poppins ? styles.active : ""}
              >
                Poppins
              </button>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      font: { poppins: false, roboto: true },
                    },
                  })
                }
                className={active.text.font.roboto ? styles.active : ""}
              >
                Roboto serif
              </button>
            </div>
          </div>
          <div>
            <p>Textstorlek</p>
            <div>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      fontSize: { small: true, medium: false, large: false },
                    },
                  })
                }
                className={active.text.fontSize.small ? styles.active : ""}
              >
                Liten
              </button>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      fontSize: { small: false, medium: true, large: false },
                    },
                  })
                }
                className={active.text.fontSize.medium ? styles.active : ""}
              >
                Medium
              </button>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      fontSize: { small: false, medium: false, large: true },
                    },
                  })
                }
                className={active.text.fontSize.large ? styles.active : ""}
              >
                Stor
              </button>
            </div>
          </div>
          <div>
            <p>Radavstånd</p>
            <div>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      space: { small: true, medium: false, large: false },
                    },
                  })
                }
                className={active.text.space.small ? styles.active : ""}
              >
                Liten
              </button>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      space: { small: false, medium: true, large: false },
                    },
                  })
                }
                className={active.text.space.medium ? styles.active : ""}
              >
                Medium
              </button>
              <button
                onClick={() =>
                  setActive({
                    ...active,
                    text: {
                      ...active.text,
                      space: { small: false, medium: false, large: true },
                    },
                  })
                }
                className={active.text.space.large ? styles.active : ""}
              >
                Stor
              </button>
            </div>
          </div>
        </div>
        <div className={styles.test}>
          <p className={styles.bold}>Test</p>
          <p>
            Quisque sit amet felis non neque consectetur lobortis. Donec
            hendrerit blandit ex, id congue nulla viverra eu.
          </p>
          <div>
            {/* display buttons only */}
            <button disabled>Lorem ipsum</button>
            <button disabled>Lorem ipsum</button>
            <button disabled>Lorem ipsum</button>
            <button disabled>Lorem ipsum</button>
          </div>
          <div>
            <small>Ipsum dipsum</small>
            <small>Fraga 1/10</small>
          </div>
        </div>
      </motion.div>
      <button className={styles.primarybtn}>Spara</button>
    </>
  );
};

const SettingsProfile = () => {
  const [disabled, setDisabled] = useState(true);
  function handleClick(e) {
    e.preventDefault();
    setDisabled(false);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        className={styles.settingsProfile}
      >
        <form>
          <label htmlFor="name">Användarnamn</label>
          <div>
            <input
              disabled={disabled}
              type="text"
              placeholder="Crazyfox23"
              minLength="2"
            ></input>
            <button onClick={handleClick}>Ändra</button>
          </div>
          <label htmlFor="passwordChange">Ändra lösenord</label>
          <button>Skicka återställningsmail</button>
        </form>
        <AvatarPicker />
      </motion.div>
      <button className={styles.primarybtn}>Spara</button>
    </>
  );
};

export default function Settings() {
  const [activeSetting, setActiveSetting] = useState("font");

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        className={styles.settingsSection}
      >
        <h2>Settings</h2>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleButton} ${
              activeSetting === "font" ? styles.active : ""
            }`}
            onClick={() => setActiveSetting("font")}
          >
            Text
          </button>
          <button
            className={`${styles.toggleButton} ${
              activeSetting === "profile" ? styles.active : ""
            }`}
            onClick={() => setActiveSetting("profile")}
          >
            Profilinställningar
          </button>
          <div
            className={`${styles.slideBackground} ${styles[activeSetting]}`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {activeSetting === "font" && <SettingsFont />}
          {activeSetting === "profile" && <SettingsProfile />}
        </motion.div>
      </motion.section>
    </>
  );
}
