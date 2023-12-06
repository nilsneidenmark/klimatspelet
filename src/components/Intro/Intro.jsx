import sea from "../../assets/category_ocean.webp";
import mangrove from "../../assets/category_mangrove.webp";
import forest from "../../assets/category_pine-tree.webp";
import desert from "../../assets/category_desert.webp";
import glacier from "../../assets/category_glacier.webp";
import buildings from "../../assets/category_buildings.webp";
import mountain from "../../assets/category_mountain.webp";
import river from "../../assets/category_river.webp";
import ocean from "../../assets/category_ocean.webp";
import styles from "./intro.module.scss";
import { useState, useEffect } from "react";

// functionality for the slides
const Slideshow = ({ children }) => {
  const [index, setIndex] = useState(0); // tracks slide index
  // increments the index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <>
      {/* displays the slide with the current index */}
      <>{children[index]}</>
      <div className={styles.circles}>
        <button
          onClick={() => setIndex(0)}
          className={`${index === 0 ? styles.active : ""}`}
        ></button>
        <button
          onClick={() => setIndex(1)}
          className={`${index === 1 ? styles.active : ""}`}
        ></button>
        <button
          onClick={() => setIndex(2)}
          className={`${index === 2 ? styles.active : ""}`}
        ></button>
      </div>
    </>
  );
};

// Markup for each slide
const Slide = ({ header, text, img1, img2, img3 }) => {
  return (
    <div>
      <h1>{header}</h1>
      <div className={styles.container}>
        <div>
          <div>
            <img src={img1} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
          <div>
            <img src={img2} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
          <div>
            <img src={img3} width="125px" />
            <p>Varldens hav</p>
            <small>0/12</small>
          </div>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function Intro() {
  return (
    <section className={styles.intro}>
      <Slideshow>
        <Slide
          header="Lar dig om klimatforandringar"
          img1={sea}
          img2={mangrove}
          img3={forest}
          text="Valj en kategori pa mina sidor for att gora ett quiz."
        />
        <Slide
          header="Svara pa fragor"
          img1={desert}
          img2={glacier}
          img3={buildings}
          text="Valj en kategori pa mina sidor for att gora ett quiz."
        />
        <Slide
          header="Tavla mot dina vanner"
          img1={river}
          img2={mountain}
          img3={ocean}
          text="Valj en kategori pa mina sidor for att gora ett quiz."
        />
      </Slideshow>
      <button className={styles.primarybtn}>Logga in</button>
      <button>Skapa konto</button>
    </section>
  );
}
