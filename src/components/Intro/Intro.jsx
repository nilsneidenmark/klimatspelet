import slideImg1 from "../../assets/slider/SlideImg1.webp";
import slideImg2 from "../../assets/slider/SlideImg2.webp";
import slideImg3 from "../../assets/slider/SlideImg3.webp";
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
const Slide = ({ header, text, img }) => {
  return (
    <>
      <h1>{header}</h1>
      <div className={styles.container}>
        <img src={img} width="300px" height="300px" />
        <p>{text}</p>
      </div>
    </>
  );
};

export default function Intro({ handleClick }) {
  return (
    <section className={styles.intro}>
      <Slideshow>
        <Slide
          header="Lär dig om klimatforändringar"
          img={slideImg1}
          text="Välj din favorit kategori på mina sidor och briljera för dina vänner."
        />
        <Slide
          header="Utforska det interaktiva quizet"
          img={slideImg2}
          text="Vad vill vi ha? Bilder, grafer, vidoes! Var hittar vi det? I quizen!"
        />
        <Slide
          header="Visa dina vänner vem som är bäst"
          img={slideImg3}
          text="Lär dig mest, svara rätt, vinn lätt!"
        />
      </Slideshow>
      <button
        onClick={() => handleClick("login")}
        className={styles.primarybtn}
      >
        Logga in
      </button>
      <button onClick={() => handleClick("signup")}>Skapa konto</button>
    </section>
  );
}
