import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>What is Climate quiz?</h2>
      <div>
        <p>
          Climate quiz is an interactive quiz about climate change created as a
          portfolio project by Nils Neidenmark. Choose the category you want to
          explore, earn points and dominate the leaderboard! You can re-do a
          quiz as many times as you like! If you experience any issues please
          send an email to email@email.com.
        </p>
        <p>
          Also, feel free to check out my portfolio website at{" "}
          <a
            href="https://nilsneidenmark.com/"
            target="_blank"
            rel="noreferrer"
          >
            nilsneidenmark.com
          </a>
        </p>
      </div>
    </section>
  );
}
