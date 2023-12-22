import styles from "./services.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Rekomenderade tjänster</h2>
      <p>
        Vill du lära dig mer om klimatförämdtingarna och dess påverkan? Klicka
        då på rutorna nedanför för att komma till andra sidor med, spel, tester
        och spännande fakta.
      </p>
      <div className={styles.services}>
        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardOne}>
              <h3>Klimatkalkylatorn</h3>
              <p>Du kan beräkna din miljöpåverkan här</p>
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <h3>Klimatkalkylatorn</h3>
          <p>Du kan beräkna din miljöpåverkan här</p>
        </div>

        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardTwo}>
              <h3>NASA ClimateKids</h3>
              <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>
        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardThree}>
              <h3>Rapport om Golfströmmen</h3>
              <p>
                Den havsström som avgör livsvillkoren för oss i Norden håller på
                att bromsa in.{" "}
              </p>
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>
        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardFour}>
              <h3>Klimatflyktingar</h3>
              <p>
                Många klimatflyktingar har ingenstans att ta vägen när havsnivån
                blir högre.
              </p>
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>
        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardFive}>
              <h3>Arktis - isarna smälter</h3>
              <p>
                När isarna försvinner blir det varmare och vädret blir mer
                extremt
              </p>
            </div>
          </a>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>
        <div className={styles.card}>
          <a href="https://www.example.com">
            <div className={styles.cardSex}>
              <h3>Sveriges klimatutsläpp</h3>
              <p>Sveriges klimatutsläpp minskade med fem procent under 2022 </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
