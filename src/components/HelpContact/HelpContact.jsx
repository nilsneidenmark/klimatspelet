import styles from "./helpcontact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import bearAvatar from "../../assets/avatars/Bear.webp";
import rabbitAvatar from "../../assets/avatars/Rabbit.webp";
import gorillaAvatar from "../../assets/avatars/Gorilla.webp";

// Imports for icons from React bootstrap
import CloseButton from "react-bootstrap/CloseButton";
import Accordion from "react-bootstrap/Accordion";

export default function HelpContact() {
  return (
    <section className={styles.helpContact}>
      <div>
        <article>
          <h1>Hjälp & kontakt</h1>
          <p>
            Här hittar du hjälp och vanligt ställda frågor. Hittar du fel eller
            buggar på hemsidan får du gärna berätta det för oss på{" "}
            <a href="mailto:mailadress@email.se"> mailadress@email.se</a>{" "}
          </p>
        </article>
        <article className={styles.faq}>
          <h2>Vanliga frågor</h2>
          <Accordion className={styles.accordion}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hur byter jag avatar?</Accordion.Header>
              <Accordion.Body>
                En meny visas om du trycker på din avatar i höger hörn. Under
                inställningar finns knappen profilinställning hittar du olika
                avatarer.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Var ser jag mina poäng?</Accordion.Header>
              <Accordion.Body>
                Du ser dina poäng uppe till höger bredvid din avatar. Du kan
                även se dina poäng i topplistan på “mina sidor”.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Kan jag byta lösenord?</Accordion.Header>
              <Accordion.Body>
                Du kan byta lösenord på inställningar. Detta hittar du under
                menyn i din avatar.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Kan jag göra om ett quiz och få bättre poäng?
              </Accordion.Header>
              <Accordion.Body>
                Ja, det kan du. Du kan göra om ett quiz hur många gånger du
                vill.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>

        <article className={styles.contact}>
          <h3>Kontakt</h3>
          <p>
            Behöver du mer hjälp eller undrar du över något når du oss på{" "}
            <a href="mailto:mailadress@email.se"> mailadress@email.se</a>
          </p>
        </article>
      </div>

      <div>
        <CloseButton className={styles.closeBTN} />
        <div>
          <div className={styles.bearAvatar}>
            <img src={bearAvatar} alt="Bear avatar" />
            <p>???</p>
          </div>
          <div className={styles.rabbitAvatar}>
            <img src={rabbitAvatar} alt="Rabbit avatar" />
            <p>?</p>
          </div>
          <div className={styles.gorillaAvatar}>
            <img src={gorillaAvatar} alt="Gorilla avatar" />
            <p>??</p>
          </div>
        </div>
      </div>
    </section>
  );
}
