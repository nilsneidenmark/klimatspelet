import "../Header/header.module.scss";

export default function Header() {
  return (
    <header>
      <div>
        <h2>EcoExplorer</h2>
        <div>
          <button>Skapa konto</button>
          <button className="primarybtn">Logga in</button>
        </div>
      </div>
    </header>
  );
}
