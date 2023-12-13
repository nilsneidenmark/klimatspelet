// Startsida för utloggade
import HelpContact from "../../components/HelpContact/HelpContact";
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Settings from "../../components/Settings/Settings";
import Signup from "../../components/Signup/Signup";
import { useState } from "react";
import { useDisplay } from "../../context/DisplayLoginOrSignupContext";

export default function Home() {
  const { display, setDisplay } = useDisplay();

  function handleClick(type) {
    setDisplay(type);
  }

  return (
    <>
      {display === "intro" && <Intro handleClick={handleClick} />}
      {display === "login" && <Login />}
      {display === "signup" && <Signup />}

      {/* <Signup />
      <Settings />
      <Login /> */}
      {/* <HelpContact /> */}
    </>
  );
}
