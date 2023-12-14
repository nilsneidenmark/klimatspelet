import avatarBear from "../../assets/avatar_bear.webp";
import avatarDog from "../../assets/avatar_dog.webp";
import avatarGreen from "../../assets/avatar_gamer_green.webp";
import avatarPink from "../../assets/avatar_gamer_pink.webp";
import avatarGiraffe from "../../assets/avatar_giraffe.webp";
import avatarGorilla from "../../assets/avatar_gorilla.webp";
import avatarRabbit from "../../assets/avatar_rabbit.webp";
import avatarWalrus from "../../assets/avatar_walrus.webp";
import arrow from "../../assets/icons/chevron-down.svg";
import styles from "./avatar.module.scss";
import { useScore } from "../../context/ScoreContext";

export default function Avatar() {
  const { score } = useScore();
  return (
    <div tabIndex={0} className={styles.avatar}>
      <div className={styles.points}>
        <p className={styles.star}>⭐</p>
        <p>{score}</p>
      </div>

      <img src={avatarBear} alt="avatar" />
      <div className={styles.arrow}>
        <img src={arrow} alt="down arrow" />
      </div>
    </div>
  );
}
