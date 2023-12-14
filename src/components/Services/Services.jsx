import styles from "./services.module.scss"
import cardImgKalkyl from "../../assets/Klimatkalkylatorn.jpg"
import cardImgNasa from "../../assets/NasaClimateKids.jpg"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Services() {
  return (
    <section>
      <h2>Rekomenderade tjänster</h2>
      <div className={styles.services}>
        <div className={styles.card}>
        <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          img src={cardImgKalkyl}
          alt="Klimatkalkylatorn"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Klimatkalkylatorn
          </Typography>
          <Typography variant="body" color="text.secondary">
          Du kan beräkna din miljöpåverkan här.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>

        <div className={styles.card}>
        <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          img src={cardImgNasa}
          alt="NASA ClimateKids"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NASA ClimateKids
          </Typography>
          <Typography variant="body" color="text.secondary">
          Lär dig mer om klimatet genom spel på NASA ClimateKids.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>

      </div>
    </section>
  );
}
