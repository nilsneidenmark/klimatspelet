import dog from "../../assets/dog.png";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h1>Lär dig om klimatförändringarna</h1>
      <div className={styles.container}>
        <div>
          <div>
            <img src={dog} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
          <div>
            <img src={dog} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
          <div>
            <img src={dog} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
        </div>
        <p>Valj en kategori pa mina sidor for att gora ett quiz.</p>
      </div>
      <div className={styles.circles}>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <button className={styles.primarybtn}>Logga in</button>
      <button>Skapa konto</button>
    </section>
  );
}
