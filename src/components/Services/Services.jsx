import styles from "./services.module.scss";

// offer the player more sources and information regarding the climate change. 
export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Rekomenderade tjänster</h2>
      <p>Vill du lära dig mer om klimatförändringarna och dess påverkan? 
        Klicka då på rutorna nedanför för att komma till andra sidor med, spel, tester och spännande fakta.</p>
      <div className={styles.services}>

         <div className={`${styles.card} ${styles.cardOne}`}>
            <a className={styles.serviceLink} target="_blank" href="https://www.wwf.se/klimat/klimatkalkylatorn/"> 
                <h3>Klimatkalkylatorn</h3>
                <p>Du kan beräkna din miljöpåverkan här.</p>
            </a>
         </div>

         <div className={`${styles.card} ${styles.cardTwo}`}>
            <a className={styles.serviceLink} target="_blank" href="https://climatekids.nasa.gov/"> 
                <h3>NASA ClimateKids</h3>
                <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
            </a>
         </div>

         <div className={`${styles.card} ${styles.cardThree}`}>
            <a className={styles.serviceLink} target="_blank" href="https://www.havet.nu/orovackande-rapport-om-golfstrommen-"> 
                <h3>Rapport om Golfströmmen</h3>
                <p>Den havsström som avgör livsvillkoren för oss i Norden håller på att bromsa in.</p>
            </a>
         </div>

         <div className={`${styles.card} ${styles.cardFour}`}>
            <a className={styles.serviceLink} target="_blank" href="https://www.raddabarnen.se/vad-vi-gor/katastrofer/klimatet/klimatflyktingar/"> 
                <h3>Klimatflyktingar</h3>
                <p>Många klimatflyktingar har ingenstans att ta vägen när havsnivån blir högre.</p>
            </a>
         </div>

         <div className={`${styles.card} ${styles.cardFive}`}>
            <a className={styles.serviceLink} target="_blank" href="https://www.greenpeace.org/sweden/hav/arktis-isarna-smalter/"> 
                <h3>Arktis - isarna smälter</h3>
                <p>När isarna försvinner blir det varmare och vädret blir mer extremt.</p>
            </a>
         </div>

         <div className={`${styles.card} ${styles.cardSex}`}>
            <a className={styles.serviceLink} target="_blank" href="https://www.naturvardsverket.se/data-och-statistik/klimat/sveriges-utslapp-och-upptag-av-vaxthusgaser/"> 
                <h3>Sveriges klimatutsläpp</h3>
                <p>Sveriges klimatutsläpp minskade med fem procent under 2022.</p>
            </a>
         </div>

      </div>
    </section>
  );
}
