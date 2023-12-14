import "../Header/header.module.scss";
import Avatar from "../Avatar/Avatar";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../../context/AuthenticatedContext";

export default function Header() {
  const { display, setDisplay } = useDisplay();
  const { authenticated } = useAuthenticated();

  const navigate = useNavigate();

  function handleClick() {
    if (authenticated) {
      navigate("/profile");
    } else {
      setDisplay("intro");
      navigate("/");
    }
    // console.log("clicked");
  }

  return (
    <header>
      <div>
        <button onClick={handleClick}>EcoExplorer</button>
        {display === "avatar" ? (
          <Avatar />
        ) : (
          <div>
            <button onClick={() => setDisplay("signup")}>Skapa konto</button>
            <button onClick={() => setDisplay("login")} className="primarybtn">
              Logga in
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
