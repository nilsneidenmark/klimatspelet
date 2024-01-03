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
import logo from "../../assets/logo/logotyp_minst.png"

export default function Header() {
  const { display, setDisplay } = useDisplay(); // State for conditional rendering
  const { authenticated, setAuthenticated } = useAuthenticated(); // checks if user is authenticated
  const [openDrawer, setOpenDrawer] = useState(false); // for opening/closing the drawer menu
  const [openSettings, setOpenSettings] = useState(false); // state for opening/closing settings
  const [openHelp, setOpenHelp] = useState(false); // state for opening/closing help section
  const navigate = useNavigate();

  // const handleClose = () => setOpenDrawer(false);
  const handleShow = () => setOpenDrawer(true);

  // for logo click, if user is authenticated send user to profile page otherwise to homepage and display intro component
  function handleClick() {
    if (authenticated) {
      navigate("/profile");
    } else {
      setDisplay("intro");
      navigate("/");
    }
  }

  // function that logs out the user and redirects to homepage
  function handleLogout() {
    setDisplay("intro");
    setAuthenticated(false);
    setOpenDrawer(false);
    navigate("/");
  }

  return (
    <>
      {/* Shows avatar if user is authenticated otherwise login/signup buttons */}
      <header>
        <div>
          <button onClick={handleClick}><img src={logo} alt="logotype for EcoExplorer"/></button>
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
      {/* Component for drawer menu */}
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
              <button onClick={() => handleLogout()}>Logga ut</button>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
      {/* Modal for displaying settings component */}
      <Modal
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          overflowY: "scroll",
        }}
        open={openSettings}
        onClose={() => setOpenSettings(false)}
      >
        <>
          <Settings handleClick={() => setOpenSettings(false)} />
        </>
      </Modal>
      {/* Modal for displaying HelpContact component */}
      <Modal
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          overflowY: "scroll",
        }}
        open={openHelp}
        onClose={() => setOpenHelp(false)}
      >
        <>
          <HelpContact handleClick={() => setOpenHelp(false)} />
        </>
      </Modal>
    </>
  );
}
