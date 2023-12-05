import styles from "../HelpContact/helpcontact..module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

// Imports for icons from React bootstrap
import CloseButton from 'react-bootstrap/CloseButton';
import Accordion from 'react-bootstrap/Accordion';

export default function HelpContact() {
  return (
    <section>

        <div className={styles.FlowLeft}> 
            <div>
                <h1>Hjälp & kontakt</h1>
                <p>Här hittar du hjälp och vanligt ställda frågor.
                    Hittar du fel eller buggar på hemsidan får du gärna berätta det för oss på <a href="mailto:mailadress@email.se"> mailadress@email.se</a> </p>
            </div>

            <div>
                <h2>Vanliga frågor</h2>

                <Accordion flush>

                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Detta är en vanlig fråga?</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Detta är en vanlig fråga?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Detta är en vanlig fråga?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Detta är en vanlig fråga?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            </div>

            <div>
                <h3>Kontakt</h3>
                <p>Behöver du mer hjälp eller undrar du över något når du oss på <a href="mailto:mailadress@email.se"> mailadress@email.se</a></p>
            </div>
        </div>

        <div className={styles.FlowRight}>
            <div>
                <p>Placeholder för ikon av avatar</p>
                <p>Placeholder för ikon av avatar</p>
                <p>Placeholder för ikon av avatar</p>
            </div>
        </div>

        <div>
            <CloseButton /> 
        </div>
    </section>
  );
}
