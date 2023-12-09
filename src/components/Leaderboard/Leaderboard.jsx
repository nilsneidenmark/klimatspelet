import styles from "./leaderboard.module.scss"

export default function Leaderboard() {
    return (
        <section>
            <div className={styles.leaderBoard}>

                <div className={styles.myPlace}>
                    <h2>Min placering</h2>
                    <p>5</p>
                </div>
                
                <div className={styles.topPlace}>
                    <h2>Topplista</h2>
                    <ol>
                        <li>SillySeal</li>
                        <li>HappyHorse</li>
                        <li>CozyCow</li>
                    </ol>
                </div>
                
            </div>
        </section>
    );
}