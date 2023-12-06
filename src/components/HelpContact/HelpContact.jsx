import styles from "./helpcontact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// Imports for icons from React bootstrap
import CloseButton from "react-bootstrap/CloseButton";
import Accordion from "react-bootstrap/Accordion";

export default function HelpContact() {
  return (
    <section>
      <div className={styles.flowLeft}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Var ser jag mina poäng?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Kan jag byta lösenord?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Kan jag göra om ett quiz och få bättre poäng?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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

      <div className={styles.flowRight}>
        <div>
          <p>Placeholder för ikon av avatar</p>
          <p>Placeholder för ikon av avatar</p>
          <p>Placeholder för ikon av avatar</p>
        </div>
      </div>

<<<<<<< HEAD
      <div>
        <CloseButton />
      </div>
=======
                </Accordion>
                </article>

                <article className={styles.contact}>
                    <h3>Kontakt</h3>
                    <p>Behöver du mer hjälp eller undrar du över något når du oss på <a href="mailto:mailadress@email.se"> mailadress@email.se</a></p>
                </article>
            </div>

            <div className={styles.flowRight}>
                <div>
                    <div className={styles.avatarLeft}><img src={"/src/assets/avatar_bear.webp"} alt="avatar" /></div>
                    <div className={styles.avatarMiddle}><img src={"/src/assets/avatar_rabbit.webp"} alt="avatar" /></div>
                    <div className={styles.avatarRight}><img src={"/src/assets/avatar_gorilla.webp"} alt="avatar" /></div>
                </div>
            </div>

            <div>
                <CloseButton /> 
            </div>
>>>>>>> 4a312bd8620637f6a8f160989132a73bd025fbb3
    </section>
  );
}
