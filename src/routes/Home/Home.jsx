// Startsida för utloggade
import HelpContact from "../../components/HelpContact/HelpContact";
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";

export default function Home() {
  return (
    <>
      <Login />
      <Intro />
      <HelpContact />
    </>
  );
}
