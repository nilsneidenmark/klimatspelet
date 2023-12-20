import { useState, useEffect } from "react";
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

// components that loops over the media attribute in quizData. Returns the type that is not false.
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
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // creates an array of the incorrect and correct answers then randomizes the order of the array
  useEffect(() => {
    if (quizData && quizData[index]) {
      const answers = [
        ...quizData[index].incorrect_answers,
        quizData[index].correct_answer,
      ];
      const shuffled = shuffleArray(answers);
      setShuffledAnswers(shuffled);
    }
  }, [index]);

  // randomizes the order of the array from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (quizData === undefined)
    return <p>Hittade ingen fråga, pröva att ladda om sidan!</p>;

  // Checks if the answer is correct or incorrect. Updates the score and feedback accordingly and displays feedback.
  function handleclick(answer) {
    setDisplayFeedback(true);
    if (answer === "incorrect") {
      setFeedback(`Fel svar.. 😔 ${quizData[index].feedback}`);
      // only decrements the score if its not 0 to avoid negative score
      if (score != 0) {
        setScore((prevScore) => prevScore - 1);
      }
    }
    if (answer === "correct") {
      setFeedback(`Rätt svar 🤩! ${quizData[index].feedback}`);
      setScore((prevScore) => prevScore + 1);
    }
  }

  // Removes the feedback dialog and checks if there are more questions in the quiz or not. If not then end the quiz otherwise increment the question by one.
  function nextQuestion() {
    setDisplayFeedback(false);

    if (index === quizData.length - 1) {
      setEndQuiz(true);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setBtnText("Nästa fråga");
    }
    if (index === quizData.length - 2) {
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
        {/* If the quiz has ended render final feedback */}
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
          //  If quiz has not ended then render the top part of the quiz
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
            {/* Nested ternery, if feedback is not true then render question */}
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
              //  If feedback is true then render feedback
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
            {/* If feedback is not displayed then render quiz buttons */}
            {!displayFeedback && (
              <div>
                {/* renders the shuffled array answers as buttons */}
                {shuffledAnswers.map((answer, id) => (
                  <button
                    key={id}
                    className={styles.primarybtn}
                    onClick={() =>
                      handleclick(
                        answer === quizData[index].correct_answer
                          ? "correct"
                          : "incorrect"
                      )
                    }
                  >
                    {answer}
                  </button>
                ))}
              </div>
            )}
            {/* If feedback is displayed then render the next/finish button */}
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
