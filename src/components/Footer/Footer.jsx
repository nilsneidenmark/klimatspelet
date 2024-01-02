import "../Footer/footer.module.scss";
import logo from "../../assets/logo/logotyp_minst.png"

export default function Footer() {
  return (
    <footer>
      <div>
      <img src={logo} alt="logotype for EcoExplorer"/>
        <ul>
          <li>Hjälp & kontakt</li>
          <li>Behandling av personuppgifter</li>
          <li>Hantering av kakor</li>
        </ul>
      </div>
    </footer>
  );
}
