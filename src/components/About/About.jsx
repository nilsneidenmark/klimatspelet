import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h2>Om EcoExplorer</h2>
      <div>
        <p>
          Ecoexplorer är ett spel som handlar om klimatförändringar. Du kan
          själv välja vilken kategori du vill göra. I varje kategori finns olika
          quiz frågor som du kan svara på genom att välja ett av fyra
          alternativ. Du får poäng för varje rätt svar och kan följa ditt
          resultat på “mina sidor”.
        </p>
      </div>
    </section>
  );
}
