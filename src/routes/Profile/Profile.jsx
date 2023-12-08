// Renderar Profilsidan för elever
import Categories from "../../components/Categories/Categories";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
// import Services from "../../components/Services/Services";
import About from "../../components/About/About";

export default function Profile() {
  return (
    <>
      <Categories />
      <Leaderboard />
      <About />
    </>
  );
}
