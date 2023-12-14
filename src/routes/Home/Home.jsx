// Startsida för utloggade
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";

export default function Home() {
  const { display, setDisplay } = useDisplay();

  // updates display context to conditionally render the home page depending on state
  function handleClick(type) {
    setDisplay(type);
  }

  return (
    <>
      {display === "intro" && <Intro handleClick={handleClick} />}
      {display === "login" && <Login />}
      {display === "signup" && <Signup />}
    </>
  );
}
