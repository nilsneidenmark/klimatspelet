import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import corals from "../../assets/background/bild_korallrev2.webp";

// component to render different media types depending on whats in the quizData.json
const Media = ({ media }) => {
  let item = "";
  // loops over the types of the media attribute and saves the one that is not false.
  for (let type in media) {
    if (media[type] != false) {
      item = media[type];
    }
  }
  // Checks the media type and renders either different diagrams or the podcast
  switch (item) {
    case "emissions":
      return <Co2Emissions />;
    case "sealevel":
      return <SeaLevel />;
    case "temperatures":
      return <GlobalTemperatures />;
    case "image":
      return <img src={corals} alt="corals" />;
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
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [btnText, setBtnText] = useState("Next question");
  const [index, setIndex] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const { score, setScore } = useScore();
  const animate = useScoreAnimation(score);
  const navigate = useNavigate();
  const ref = useRef(); // to track the top section for scroll
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

  function handleclick(answer) {
    setDisplayFeedback(true);
    // scrolls the user to the top of the seciton
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    if (answer === "incorrect") {
      setCorrectAnswer(false);
      if (score != 0) {
        setScore((prevScore) => prevScore - 1);
      }
    } else if (answer === "correct") {
      setCorrectAnswer(true);
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
      setBtnText("Next question");
    }
    if (index === quizData.length - 2) {
      setBtnText("End quiz");
    }
  }

  return (
    <>
      <motion.div
        className={styles.question}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        ref={ref}
      >
        {/* Render end result  */}
        {endQuiz ? (
          <motion.div
            className={styles.endQuiz}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
          >
            <img src={celebrate} alt="ocean icon" />
            <h3>Congratulations! You just completed Oceans 😍</h3>
            <p>You got {score}/10 points</p>
            <button
              onClick={() => navigate("/profile")}
              className={styles.primarybtn}
            >
              Save & exit
            </button>
          </motion.div>
        ) : (
          // Render top section of quiz
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
          >
            <div className={styles.top_section}>
              <h3>Question {quizData[index].number} / 10</h3>
              <h3
                className={`${styles.score} ${
                  animate.increase ? styles.increase : ""
                } ${animate.decrease ? styles.decrease : ""}`}
              >
                Score: {score}
              </h3>
            </div>
            {/* Render question */}
            {!displayFeedback ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
                className={styles.questionContainer}
              >
                <Media media={quizData[index].media} />

                <p>{quizData[index].introduction}</p>
                <p className={styles.thisQuestion}>
                  {quizData[index].question}
                </p>
              </motion.div>
            ) : (
              // Render feedback
              <motion.div
                className={styles.feedback}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.4 } }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4 } }}
                  src={correctAnswer ? einstein : greta}
                  alt="meme"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4 } }}
                >
                  <p>{correctAnswer ? "You got it 🤩" : "Wrong answer 😟"}</p>
                  {!correctAnswer && (
                    <p>
                      The correct answer is: {quizData[index].correct_answer}
                    </p>
                  )}
                  <p>{quizData[index].feedback}</p>
                  <div>
                    <p>
                      Source:{" "}
                      <a target="blank" href={quizData[index].source}>
                        {quizData[index].sourceDescription}
                      </a>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
            {/* Render quiz buttons */}
            {!displayFeedback && (
              <div>
                {/* renders the shuffled array answers as buttons */}
                {shuffledAnswers.map((answer, id) => (
                  <button
                    key={id}
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
                <Link className={styles.saveBtn} to="/profile">
                  Save & exit
                </Link>
              </div>
            )}
            {displayFeedback && (
              <div className={styles.nextQuestion}>
                <div>
                  <Link
                    className={`${styles.saveBtn} ${
                      btnText == "Avsluta quiz" ? styles.hideBtn : "none"
                    }`}
                    to="/profile"
                  >
                    Save & exit
                  </Link>
                  <button onClick={() => nextQuestion()} className="primarybtn">
                    {btnText}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
