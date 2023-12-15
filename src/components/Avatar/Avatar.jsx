import avatarBear from "../../assets/avatars/bear_60x60.webp";
import arrow from "../../assets/icons/chevron-down.svg";
import styles from "./avatar.module.scss";
import { useScore } from "../../context/ScoreContext";
import { useScoreAnimation } from "../../hooks/useScoreAnimation";

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
      <div className={styles.arrow}>
        <img src={arrow} alt="down arrow" />
      </div>
    </div>
  );
}
