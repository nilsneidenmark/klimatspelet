import styles from "../Header/header.module.scss";

export default function Header() {
  return (
    <header>
      <h2>EcoExplorer</h2>
      <div>
        <button>Skapa konto</button>
        <button>Logga in</button>
      </div>
    </header>
  );
}
