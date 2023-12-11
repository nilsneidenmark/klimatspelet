// Startsida för utloggade
import HelpContact from "../../components/HelpContact/HelpContact";
import Intro from "../../components/Intro/Intro";
import Login from "../../components/Login/Login";
import Question from "../../components/Question/Question";
import Settings from "../../components/Settings/Settings";

export default function Home() {
  return (
    <>
      <section className="test-section">
        <h2>Primary</h2>
        <div className="primary-buttons">
          <button className="opt1">Test</button>
          <button className="opt">Tests</button>
          <button className="opt3">Test</button>
          <button className="opt4">Test</button>
          <button className="opt5">Test</button>
        </div>
        <h2>Secondary</h2>
        <div className="secondary-buttons">
          <button className="opt1">Test</button>
          <button className="opt2">Test</button>
          <button className="opt3">Test</button>
          <button className="opt4">Test</button>
          <button className="opt5">Test</button>
        </div>
      </section>
      <Settings />
      <Login />
      <Intro />
      <HelpContact />

      <Question />
    </>
  );
}
