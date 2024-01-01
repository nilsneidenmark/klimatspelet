import avatarBear from "../../assets/avatars/bear_60x60.webp";
import hamburger from "../../assets/icons/menu.svg";
import styles from "./avatar.module.scss";
import { useScore } from "../../context/ScoreContext";
import { useScoreAnimation } from "../../hooks/useScoreAnimation";

// component for the avatar menu when clicked toggles the Drawer component menu through props
// also dynamically displays the score from context
export default function Avatar({ handleShow }) {
  const { score } = useScore();
  const animate = useScoreAnimation(score);

  return (
    <div onClick={handleShow} tabIndex={0} className={styles.avatar}>
      <div className={styles.points}>
        <p className={styles.star}>⭐</p>
        <p
          className={`${styles.score} ${
            animate.increase ? styles.increase : ""
          } ${animate.decrease ? styles.decrease : ""}`}
        >
          {score}
        </p>
      </div>

      <img width="60px" src={avatarBear} alt="avatar" />
      <div className={styles.menu}>
        <img src={hamburger} alt="menu" />
      </div>
    </div>
  );
}
