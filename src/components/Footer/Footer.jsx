import "../Footer/footer.module.scss";
import Logo from "../Logo/Logo";
export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <ul>
          <li>Hjälp & kontakt</li>
          <li>Behandling av personuppgifter</li>
          <li>Hantering av kakor</li>
        </ul>
      </div>
    </footer>
  );
}
