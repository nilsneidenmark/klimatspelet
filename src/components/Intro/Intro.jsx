import slide1 from "../../assets/slider/slide1.png";
import slide2 from "../../assets/slider/slide2.png";
import slide3 from "../../assets/slider/slide3.png";
import styles from "./intro.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Slideshow component, renders each slide as children
const Slideshow = ({ children }) => {
  const [index, setIndex] = useState(0); // tracks slide index
  const intervalRef = useRef(null); // tracks the timer

  // objects for fade-in animation
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const transition = {
    duration: 0.4,
    ease: "easeOut",
  };

  // starts a timer that changes the index every five seconds, index is used for displaying different slides
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setIndex((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [children]);

  // manually changes slide index on click, also resets previously set timer and starts a new one
  const handleClick = (index) => {
    setIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };
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
          onClick={() => handleClick(0)}
          className={`${index === 0 ? styles.active : ""}`}
        ></button>
        <button
          onClick={() => handleClick(1)}
          className={`${index === 1 ? styles.active : ""}`}
        ></button>
        <button
          onClick={() => handleClick(2)}
          className={`${index === 2 ? styles.active : ""}`}
        ></button>
      </div>
    </>
  );
};

// Markup for each slide
const Slide = ({ header, img }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={img} width="300px" height="300px" />
        <h1>{header}</h1>
      </div>
    </>
  );
};

export default function Intro({ handleClick }) {
  return (
    <section className={styles.intro}>
      <Slideshow>
        <Slide header="Learn about climate change" img={slide1} />
        <Slide header="Explore the interactive quiz" img={slide2} />
        <Slide header="Dominate the leaderboard" img={slide3} />
      </Slideshow>
      <button
        onClick={() => handleClick("login")}
        className={styles.primarybtn}
      >
        Sign in
      </button>
      <button onClick={() => handleClick("signup")}>Create account</button>
    </section>
  );
}
