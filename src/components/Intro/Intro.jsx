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
import { motion } from "framer-motion";

// functionality for the slides
const Slideshow = ({ children }) => {
  const [index, setIndex] = useState(0); // tracks slide index
  // increments the index every 5 seconds

  // Animation variants for slide transitions
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = {
    duration: 1,
    ease: "easeOut",
  };
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
      <motion.div
        key={index}
        initial="enter"
        animate="center"
        exit="exit"
        variants={slideVariants}
        transition={transition}
      >
        {/* displays the slide with the current index */}
        <>{children[index]}</>
        {/* markup for slider  */}
      </motion.div>
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
    <>
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
    </>
  );
};

export default function Intro() {
  return (
    <section className={styles.intro}>
      <Slideshow>
        <Slide
          header="Lär dig om klimatforändringar"
          img1={sea}
          img2={mangrove}
          img3={forest}
          text="Välj en kategori på mina sidor för att göra ett quiz."
        />
        <Slide
          header="Svara pa frågor"
          img1={desert}
          img2={glacier}
          img3={buildings}
          text="Lär dig genom att kolla på grafer, videos och mycker mer!"
        />
        <Slide
          header="Tavla mot dina vanner"
          img1={river}
          img2={mountain}
          img3={ocean}
          text="Vem av dina vänner vet mest?"
        />
      </Slideshow>
      <button className={styles.primarybtn}>Logga in</button>
      <button>Skapa konto</button>
    </section>
  );
}
