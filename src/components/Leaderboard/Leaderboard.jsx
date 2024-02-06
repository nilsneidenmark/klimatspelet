import styles from "./leaderboard.module.scss";

export default function Leaderboard() {
  return (
    <section>
      <div className={styles.leaderBoard}>
        <div className={styles.topPlace}>
          <h2>Leaderboard</h2>
          <ol>
            <li>SillySeal</li>
            <li>HappyHorse</li>
            <li>CozyCow</li>
          </ol>
        </div>
        <div className={styles.myPlace}>
          <h2>Crazyfox23</h2>
          <p>5</p>
        </div>
      </div>
    </section>
  );
}
