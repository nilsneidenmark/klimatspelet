import styles from "./logo.module.scss";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../../context/AuthenticatedContext";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";

export default function Logo() {
  const { authenticated } = useAuthenticated(); // checks if user is authenticated
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

  // Runs onClick function on enter press when focused
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div
      onKeyDown={handleKeyPress}
      onClick={handleClick}
      tabIndex={0}
      className={styles.logo}
    >
      <div>
        <h3>ClimateQuiz</h3>
      </div>
    </div>
  );
}
