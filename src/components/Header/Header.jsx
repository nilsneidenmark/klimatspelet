import "../Header/header.module.scss";
import Avatar from "../Avatar/Avatar";

export default function Header() {
  return (
    <header>
      <div>
        <h2>EcoExplorer</h2>
        {/* <Avatar /> */}
        <div>
          <button>Skapa konto</button>
          <button className="primarybtn">Logga in</button>
        </div>
      </div>
    </header>
  );
}
