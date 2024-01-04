import styles from "./logo.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../../context/AuthenticatedContext";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";
import logo from "../../assets/logo/logotyp_minst_utantext.png";

export default function Logo() {
  const { authenticated, setAuthenticated } = useAuthenticated(); // checks if user is authenticated
  const { setDisplay } = useDisplay(); // State for conditional rendering
  const navigate = useNavigate();

  // for logo click, if user is authenticated send user to profile page otherwise to homepage and display intro component
  function handleClick() {
    if (authenticated) {
      navigate("/profile");
    } else {
      setDisplay("intro");
      navigate("/");
    }
  }
  return (
    <div onClick={handleClick} className={styles.logo}>
      <img width="50px" src={logo} alt="logotype"></img>
      <div>
        <h3>EcoExplorer</h3>
        <p>Lär dig mer om klimatet.</p>
      </div>
    </div>
  );
}
