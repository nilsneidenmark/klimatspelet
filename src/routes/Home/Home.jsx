// Startsida för utloggade
import HelpContact from "../../components/HelpContact/HelpContact";
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Settings from "../../components/Settings/Settings";

export default function Home() {
  return (
    <>
      <Settings />
      <Login />
      <Intro />
      <HelpContact />
    </>
  );
}
