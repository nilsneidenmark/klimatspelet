import { useState } from "react";
import styles from "./settings.module.scss";
import { motion } from "framer-motion";
import avatar from "../../assets/avatar_bear.webp";

const SettingsFont = () => {
  const [active, setActive] = useState({
    font: { poppins: true, roboto: false, open: false },
    fontSize: { small: false, medium: true, large: false },
    space: { small: false, medium: true, large: false },
  });

  const handleFontClick = (fontName) => {
    setActive({
      ...active,
      font: {
        poppins: fontName === "poppins",
        roboto: fontName === "roboto",
        open: fontName === "open",
      },
    });
  };

  const handleFontSizeClick = (size) => {
    setActive({
      ...active,
      fontSize: {
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
      },
    });
  };

  const handleSpaceClick = (spaceSize) => {
    setActive({
      ...active,
      space: {
        small: spaceSize === "small",
        medium: spaceSize === "medium",
        large: spaceSize === "large",
      },
    });
  };

  return (
    <>
      <div className={styles.fontSection}>
        <div>
          <div>
            <p>Typsnitt</p>
            <div>
              <button
                onClick={() => handleFontClick("poppins")}
                className={active.font.poppins ? styles.active : ""}
              >
                Poppins
              </button>
              <button
                onClick={() => handleFontClick("roboto")}
                className={active.font.roboto ? styles.active : ""}
              >
                Roboto serif
              </button>
              <button
                onClick={() => handleFontClick("open")}
                className={active.font.open ? styles.active : ""}
              >
                Open Dyslexic
              </button>
            </div>
          </div>
          <div>
            <p>Textstorlek</p>
            <div>
              <button
                onClick={() => handleFontSizeClick("small")}
                className={active.fontSize.small ? styles.active : ""}
              >
                Liten
              </button>
              <button
                onClick={() => handleFontSizeClick("medium")}
                className={active.fontSize.medium ? styles.active : ""}
              >
                Medium
              </button>
              <button
                onClick={() => handleFontSizeClick("large")}
                className={active.fontSize.large ? styles.active : ""}
              >
                Stor
              </button>
            </div>
          </div>
          <div>
            <p>Radavstånd</p>
            <div>
              <button
                onClick={() => handleSpaceClick("small")}
                className={active.space.small ? styles.active : ""}
              >
                Liten
              </button>
              <button
                onClick={() => handleSpaceClick("medium")}
                className={active.space.medium ? styles.active : ""}
              >
                Medium
              </button>
              <button
                onClick={() => handleSpaceClick("large")}
                className={active.space.large ? styles.active : ""}
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
      </div>
      <button className={styles.primarybtn}>Spara</button>
    </>
  );
};

const SettingsProfile = () => {
  return (
    <>
      <div className={styles.settingsProfile}>
        <form>
          <label htmlFor="name">Användarnamn</label>
          <div>
            <input type="text" placeholder="Crazyfox23" minLength="2"></input>
            <button>Ändra</button>
          </div>
          <label htmlFor="passwordChange">Ändra lösenord</label>
          <button>Skicka återställningsmail</button>
        </form>
        <div>
          <p>Avatar</p>
          <div>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
            <button>
              <img src={avatar} alt="avatar" width="50px" />
            </button>
          </div>
        </div>
      </div>
      <button className={styles.primarybtn}>Spara</button>
    </>
  );
};

export default function Settings() {
  const [activeSetting, setActiveSetting] = useState("font");

  return (
    <>
      <motion.section className={styles.settingsSection}>
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
