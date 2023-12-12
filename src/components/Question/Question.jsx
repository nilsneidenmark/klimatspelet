import { useState } from "react";
import styles from "./question.module.scss";

export default function Question({ data }) {
  const [displayFeedback, setDisplayFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  // conditional rendering and error handler
  if (data === undefined)
    return <p>Hittade ingen fråga, pröva att ladda om sidan!</p>;
  function handleclick(answer) {
    setDisplayFeedback(true);
    if (answer === "incorrect") {
      setFeedback("Wrong answer!");
    } else if (answer === "correct") {
      setFeedback("Right answer!");
    }
  }
  return (
    <section>
      <div className={styles.question}>
        {!displayFeedback ? <p>{data.question}</p> : <p>{feedback}</p>}
        {!displayFeedback ? (
          <div>
            <button onClick={() => handleclick("incorrect")}>
              {data.incorrect_answers[0]}
            </button>
            <button onClick={() => handleclick("incorrect")}>
              {data.incorrect_answers[1]}
            </button>
            <button onClick={() => handleclick("incorrect")}>
              {data.incorrect_answers[2]}
            </button>
            <button onClick={() => handleclick("correct")}>
              {data.correct_answer}
            </button>
          </div>
        ) : (
          <div>
            <button className="primarybtn">Nästa fråga</button>
          </div>
        )}
      </div>
    </section>
  );
}
