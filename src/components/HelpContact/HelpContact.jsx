import styles from "./helpcontact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import avatarOne from "../../assets/avatars/bear.webp";
import avatarTwo from "../../assets/avatars/rabbit.webp";
import avatarThree from "../../assets/avatars/gorilla.webp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseButton from "react-bootstrap/CloseButton";

export default function HelpContact({ handleClick }) {
  return (
    <section className={styles.helpContact}>
      <div className={styles.topSection}>
        <h1>Hjälp & kontakt</h1>
        <CloseButton onClick={handleClick} className={styles.closeBTN} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.info}>
          <article>
            <p>
              Här hittar du hjälp och vanligt ställda frågor. Hittar du fel
              eller buggar på hemsidan får du gärna berätta det för oss på{" "}
              <a href="mailto:mailadress@email.se"> mailadress@email.se</a>{" "}
            </p>
          </article>
          <article className={styles.faq}>
            <h3>Vanliga frågor</h3>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Hur byter jag avatar?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  En meny visas om du trycker på din avatar i höger hörn. Under
                  inställningar finns knappen profilinställning hittar du olika
                  avatarer.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p>Var ser jag mina poäng?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Du ser dina poäng uppe till höger bredvid din avatar. Du kan
                  även se dina poäng i topplistan på “mina sidor”.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p>Kan jag byta lösenord?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Du kan byta lösenord på inställningar. Detta hittar du under
                  menyn i din avatar.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p> Kan jag göra om ett quiz och få bättre poäng?</p>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Ja, det kan du. Du kan göra om ett quiz hur många gånger du
                  vill.
                </p>
              </AccordionDetails>
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

        <div className={styles.avatars}>
          <div className={styles.avatarOne}>
            <img src={avatarOne} alt="Bear avatar" />
            <p>???</p>
          </div>
          <div className={styles.avatarTwo}>
            <img src={avatarTwo} alt="Rabbit avatar" />
            <p>?</p>
          </div>
          <div className={styles.avatarThree}>
            <img src={avatarThree} alt="Gorilla avatar" />
            <p>??</p>
          </div>
        </div>
      </div>
    </section>
  );
}
