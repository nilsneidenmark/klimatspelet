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

export default function Header() {
  const { display, setDisplay } = useDisplay();
  const { authenticated } = useAuthenticated();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

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
              <button>Mina sidor</button>
            </li>
            <li>
              <img src={settings} alt="settings" />
              <button>Inställningar</button>
            </li>
            <li>
              <img src={help} alt="help" />
              <button>Hjälp & kontakt</button>
            </li>
            <li>
              <img src={logout} alt="logout" />
              <button>Logga ut</button>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
    </>
  );
}
