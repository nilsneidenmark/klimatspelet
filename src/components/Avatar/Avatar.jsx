import { useEffect, useState, useRef } from "react";
import avatarBear from "../../assets/avatar_bear.webp";
import arrow from "../../assets/icons/chevron-down.svg";
import styles from "./avatar.module.scss";
import { useScore } from "../../context/ScoreContext";
import { useScoreAnimation } from "../../hooks/useScoreAnimation";

export default function Avatar() {
  const { score } = useScore();
  const animate = useScoreAnimation(score);

  return (
    <div tabIndex={0} className={styles.avatar}>
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

      <img src={avatarBear} alt="avatar" />
      <div className={styles.arrow}>
        <img src={arrow} alt="down arrow" />
      </div>
    </div>
  );
}
