import styles from "./services.module.scss";
import cardImgKalkyl from "../../assets/Klimatkalkylatorn.jpg";
import cardImgNasa from "../../assets/NasaClimateKids.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Rekomenderade tjänster</h2>
      <div>
        <div className={styles.card}>
          <h3>Klimatkalkylatorn</h3>
          <p>Du kan beräkna din miljöpåverkan här</p>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>

        <div className={styles.card}>
          <h3>NASA ClimateKids</h3>
          <p>Lär dig mer om klimatet genom spel på NASA ClimateKids.</p>
        </div>
      </div>
    </section>
  );
}
