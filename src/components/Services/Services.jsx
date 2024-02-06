import styles from "./services.module.scss";

// offer the player more sources and information regarding the climate change.
export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Explore further</h2>
      <p>
        Would you like to learn more about climate change and what you can do?
        Check out these recomended services below.
      </p>
      <div className={styles.services}>
        <div className={`${styles.card} ${styles.cardOne}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://www.wwf.se/klimat/klimatkalkylatorn/"
            rel="noreferrer"
          >
            <h3>Climate calulator</h3>
            <p>Calculate your carbon footprint.</p>
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardTwo}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://climatekids.nasa.gov/"
            rel="noreferrer"
          >
            <h3>NASA ClimateKids</h3>
            <p>Interactive games and resources.</p>
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardThree}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://www.havet.nu/orovackande-rapport-om-golfstrommen-"
            rel="noreferrer"
          >
            <h3>The gulf stream</h3>
            <p>
              Learn more about the gulf stream and how it affects our climate.
            </p>
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardFour}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://www.raddabarnen.se/vad-vi-gor/katastrofer/klimatet/klimatflyktingar/"
            rel="noreferrer"
          >
            <h3>Climate refugees</h3>
            <p>When the environment changes, some people are forced to move.</p>
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardFive}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://www.greenpeace.org/sweden/hav/arktis-isarna-smalter/"
            rel="noreferrer"
          >
            <h3>The melting glaciers</h3>
            <p>Learn more about melting glaciers and rising sea levels.</p>
          </a>
        </div>

        <div className={`${styles.card} ${styles.cardSex}`}>
          <a
            className={styles.serviceLink}
            target="_blank"
            href="https://www.naturvardsverket.se/data-och-statistik/klimat/sveriges-utslapp-och-upptag-av-vaxthusgaser/"
            rel="noreferrer"
          >
            <h3>Global emissions</h3>
            <p>Learn more about the worlds emissions.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
