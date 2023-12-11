// Startsida för utloggade
import HelpContact from "../../components/HelpContact/HelpContact";
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Question from "../../components/Question/Question";
import Settings from "../../components/Settings/Settings";
import Signup from "../../components/Signup/Signup";

export default function Home() {
  return (
    <>
      <Signup />
      <Settings />
      <Login />
      <Intro />
      <HelpContact />

      <Question />
    </>
  );
}
