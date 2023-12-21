// Startsida för utloggade
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";

export default function Home() {
  const { display, setDisplay } = useDisplay(); // State for conditional rendering

  // updates display context to conditionally render the home page (the Intro or Signup component)
  function handleClick(type) {
    setDisplay(type);
  }

  return (
    <>
      {/* The handleClick receives either login or signup as a parameter*/}
      {display === "intro" && <Intro handleClick={handleClick} />}
      {display === "login" && <Login />}
      {display === "signup" && <Signup />}
    </>
  );
}
