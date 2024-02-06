import "../Footer/footer.module.scss";
import Logo from "../Logo/Logo";
export default function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <ul>
          <li>Help & contact</li>
          <li>Terms & services</li>
          <li>Cookies policy</li>
        </ul>
      </div>
    </footer>
  );
}
