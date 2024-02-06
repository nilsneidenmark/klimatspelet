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
import Logo from "../Logo/Logo";

export default function Header() {
  const { display, setDisplay } = useDisplay(); // State for conditional rendering
  const { setAuthenticated } = useAuthenticated(); // checks if user is authenticated
  const [openDrawer, setOpenDrawer] = useState(false); // for opening/closing the drawer menu
  const [openSettings, setOpenSettings] = useState(false); // state for opening/closing settings
  const [openHelp, setOpenHelp] = useState(false); // state for opening/closing help section
  const navigate = useNavigate();

  // const handleClose = () => setOpenDrawer(false);
  const handleShow = () => setOpenDrawer(true);

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
        <div className={styles.container}>
          <Logo />
          {display === "avatar" ? (
            <Avatar handleShow={handleShow} />
          ) : (
            <div>
              <button
                className={styles.registerBtn}
                onClick={() => setDisplay("signup")}
              >
                Create account
              </button>
              <button
                onClick={() => setDisplay("login")}
                className="primarybtn"
              >
                Sign in
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
                Home
              </button>
            </li>
            <li>
              <img src={settings} alt="settings" />
              <button
                onClick={() => (setOpenSettings(true), setOpenDrawer(false))}
              >
                Settings
              </button>
            </li>
            <li>
              <img src={help} alt="help" />
              <button onClick={() => (setOpenHelp(true), setOpenDrawer(false))}>
                Help & Contact
              </button>
            </li>
            <li>
              <img src={logout} alt="logout" />
              <button onClick={() => handleLogout()}>Sign out</button>
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
