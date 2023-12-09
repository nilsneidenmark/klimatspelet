import styles from "./services.module.scss"
import bear from "../../assets/avatar_bear.webp";

export default function Services() {
  return (
    <section>
      <h2>Läs mer</h2>
      <div className={styles.services}>
        <div>
          <img src={bear} />
          <h3>Klimatkalkylatorn</h3>
          <p>
            isque sit amet felis non neque consectetur lobortis. Donec hendrerit
            blandit ex, id congue nulla viverra eu!
          </p>
        </div>

        <div>
          <img src={bear} />
          <h3>Nasa ClimateKids</h3>
          <p>
            isque sit amet felis non neque consectetur lobortis. Donec hendrerit
            blandit ex, id congue nulla viverra eu!
          </p>
        </div>
      </div>
    </section>
  );
}
