import { useState } from "react";
import styles from "../Header/header.module.scss";
import Avatar from "../Avatar/Avatar";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../../context/AuthenticatedContext";
import SwipeableDrawer from "@mui/material/Drawer";
import home from "../../assets/icons/home.svg";
import logout from "../../assets/icons/log-out.svg";
import help from "../../assets/icons/help-circle.svg";
import settings from "../../assets/icons/settings.svg";
import Modal from "@mui/material/Modal";
import Settings from "../Settings/Settings";
import HelpContact from "../HelpContact/HelpContact";
// import { useLocation } from "react-router-dom";

export default function Header() {
  const { display, setDisplay } = useDisplay();
  const { authenticated } = useAuthenticated();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();

  // if (location.pathname === "/profile") {
  //   document.documentElement.style.setProperty(
  //     "--backgroundImage",
  //     "url(/src/assets/background/bg_water.webp)"
  //   );
  // }
  const handleClose = () => setOpenDrawer(false);
  const handleShow = () => setOpenDrawer(true);

  function handleClick() {
    if (authenticated) {
      navigate("/profile");
    } else {
      setDisplay("intro");
      navigate("/");
    }
  }

  return (
    <>
      <header>
        <div>
          <button onClick={handleClick}>EcoExplorer</button>
          {display === "avatar" ? (
            <Avatar handleShow={handleShow} />
          ) : (
            <div>
              <button onClick={() => setDisplay("signup")}>Skapa konto</button>
              <button
                onClick={() => setDisplay("login")}
                className="primarybtn"
              >
                Logga in
              </button>
            </div>
          )}
        </div>
      </header>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ backgroundColor: "transparent !important" }}
      >
        <div className={styles.drawer}>
          <ul>
            <li>
              <img src={home} alt="home" />
              <button
                onClick={() => (navigate("/profile"), setOpenDrawer(false))}
              >
                Mina sidor
              </button>
            </li>
            <li>
              <img src={settings} alt="settings" />
              <button
                onClick={() => (setOpenSettings(true), setOpenDrawer(false))}
              >
                Inställningar
              </button>
            </li>
            <li>
              <img src={help} alt="help" />
              <button onClick={() => (setOpenHelp(true), setOpenDrawer(false))}>
                Hjälp & kontakt
              </button>
            </li>
            <li>
              <img src={logout} alt="logout" />
              <button>Logga ut</button>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
      <Modal
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          overflowY: "scroll",
        }}
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      >
        <Settings />
      </Modal>
      <Modal
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        open={openHelp}
        onClose={() => setOpenHelp(false)}
      >
        <HelpContact />
      </Modal>
    </>
  );
}
