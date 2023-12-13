import "../Header/header.module.scss";
import Avatar from "../Avatar/Avatar";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";

export default function Header() {
  const { setDisplay } = useDisplay();
  return (
    <header>
      <div>
        <h2>EcoExplorer</h2>
        {/* <Avatar /> */}
        <div>
          <button onClick={() => setDisplay("signup")}>Skapa konto</button>
          <button onClick={() => setDisplay("login")} className="primarybtn">
            Logga in
          </button>
        </div>
      </div>
    </header>
  );
}
