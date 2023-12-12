import { useState } from "react";
import styles from "./questions.module.scss";
import einstein from "../../assets/memes/einstein.webp";
import ocean from "../../assets/category_ocean.webp";

export default function Questions({ data }) {
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [btnText, setBtnText] = useState("Nästa fråga");
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);

  if (data === undefined)
    return <p>Hittade ingen fråga, pröva att ladda om sidan!</p>;

  function handleclick(answer) {
    setDisplayFeedback(true);
    if (answer === "incorrect") {
      setFeedback(`Fel svar! ${data[index].feedback}`);
      if (points != 0) {
        setPoints((prevPoints) => prevPoints - 1);
      }
    } else if (answer === "correct") {
      setFeedback(`Rätt svar! ${data[index].feedback}`);
      setPoints((prevPoints) => prevPoints + 1);
    }
  }

  function nextQuestion() {
    setDisplayFeedback(false);

    if (index === data.length - 1) {
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
    <div className={styles.question}>
      {endQuiz ? (
        <div className={styles.endQuiz}>
          <img src={ocean} alt="ocean icon" />
          <h3>Grattis du har precis klarat Världens hav!</h3>
          <p>Du fick {points}/10 poäng</p>
          <button className={styles.primarybtn}>Spara och avsluta</button>
        </div>
      ) : (
        <>
          <h3>Fråga {data[index].number} / 10</h3>
          <p>Poäng: {points}</p>
          {!displayFeedback ? (
            <p>{data[index].question}</p>
          ) : (
            <div className={styles.feedback}>
              <img src={einstein} alt="meme" />
              <p>{feedback}</p>
            </div>
          )}
          {!displayFeedback && (
            <div>
              <button onClick={() => handleclick("incorrect")}>
                {data[index].incorrect_answers[0]}
              </button>
              <button onClick={() => handleclick("incorrect")}>
                {data[index].incorrect_answers[1]}
              </button>
              <button onClick={() => handleclick("incorrect")}>
                {data[index].incorrect_answers[2]}
              </button>
              <button onClick={() => handleclick("correct")}>
                {data[index].correct_answer}
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
        </>
      )}
    </div>
  );
}
