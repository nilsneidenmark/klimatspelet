import { useState } from "react";
import styles from "./questions.module.scss";
import einstein from "../../assets/memes/einstein.webp";
import greta from "../../assets/memes/greta-min.webp";
import celebrate from "../../assets/memes/celebrate.gif";
import {
  SeaLevel,
  Co2Emissions,
  GlobalTemperatures,
} from "../Diagrams/Diagrams";
import podcast from "../../assets/podcast.mp3";
import { motion } from "framer-motion";
import { useScore } from "../../context/ScoreContext";
import { useScoreAnimation } from "../../hooks/useScoreAnimation";

const Media = ({ media }) => {
  let item = "";
  for (let type in media) {
    if (media[type] != false) {
      item = media[type];
    }
  }
  switch (item) {
    case "emissions":
      return <Co2Emissions />;
    case "sealevel":
      return <SeaLevel />;
    case "temperatures":
      return <GlobalTemperatures />;
    case "podcast":
      return (
        <audio controls>
          <source src={podcast} type="audio/mpeg" />
        </audio>
      );
  }
};

export default function Questions({ quizData }) {
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [btnText, setBtnText] = useState("Nästa fråga");
  const [index, setIndex] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const { score, setScore } = useScore();
  const animate = useScoreAnimation(score);

  if (quizData === undefined)
    return <p>Hittade ingen fråga, pröva att ladda om sidan!</p>;

  function handleclick(answer) {
    setDisplayFeedback(true);
    if (answer === "incorrect") {
      setFeedback(`Fel svar.. 😔 ${quizData[index].feedback}`);
      if (score != 0) {
        setScore((prevScore) => prevScore - 1);
      }
    } else if (answer === "correct") {
      setFeedback(`Rätt svar 🤩! ${quizData[index].feedback}`);
      setScore((prevScore) => prevScore + 1);
    }
  }

  function nextQuestion() {
    setDisplayFeedback(false);

    if (index === quizData.length - 1) {
      setEndQuiz(true);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setBtnText("Nästa fråga");
    }
    if (index === 8) {
      setBtnText("Avsluta quiz");
    }
  }

  return (
    <>
      <motion.div
        className={styles.question}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        {endQuiz ? (
          <motion.div
            className={styles.endQuiz}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <img src={celebrate} alt="ocean icon" />
            <h3>Grattis! du har precis genomfört Världens hav 😍</h3>
            <p>Du fick {score}/10 poäng</p>
            <button className={styles.primarybtn}>Spara och avsluta</button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <div className={styles.top_section}>
              <h3>Fråga {quizData[index].number} / 10</h3>
              <h3
                className={`${styles.score} ${
                  animate.increase ? styles.increase : ""
                } ${animate.decrease ? styles.decrease : ""}`}
              >
                Dina poäng: {score}
              </h3>
            </div>
            {!displayFeedback ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
              >
                <Media media={quizData[index].media} />

                <p>{quizData[index].introduction}</p>
                <p className={styles.thisQuestion}>
                  Fråga: {quizData[index].question}
                </p>
              </motion.div>
            ) : (
              <motion.div
                className={styles.feedback}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  src={feedback[0] === "R" ? einstein : greta}
                  alt="meme"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                >
                  {feedback}
                </motion.p>
                <motion.a
                  href={quizData[index].source}
                  target="blank"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}
                  className={styles.source}
                >
                  {`Lär dig mer om ${quizData[index].sourceDescription}`}
                </motion.a>
              </motion.div>
            )}
            {!displayFeedback && (
              <div>
                <button
                  className={styles.primarybtn}
                  onClick={() => handleclick("incorrect")}
                >
                  {quizData[index].incorrect_answers[0]}
                </button>
                <button
                  className={styles.primarybtn}
                  onClick={() => handleclick("incorrect")}
                >
                  {quizData[index].incorrect_answers[1]}
                </button>
                <button
                  className={styles.primarybtn}
                  onClick={() => handleclick("incorrect")}
                >
                  {quizData[index].incorrect_answers[2]}
                </button>
                <button
                  className={styles.primarybtn}
                  onClick={() => handleclick("correct")}
                >
                  {quizData[index].correct_answer}
                </button>
              </div>
            )}
            {displayFeedback && (
              <div className={styles.nextQuestion}>
                <button onClick={() => nextQuestion()} className="primarybtn">
                  {btnText}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
