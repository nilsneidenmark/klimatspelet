import ocean from "../../assets/categories/category_ocean_85x85.webp";
import Questions from "../../components/Question/Questions";
import styles from "./quiz.module.scss";
import quizData from "../../API/quizdata.json";

// Parent component för quizfrågor
export default function Quiz() {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizCategory}>
        <img src={ocean} alt="ocean icon" width="85px" />
        <h1>{quizData.category.name}</h1>
      </div>
      <Questions quizData={quizData.questions} />
      <button>Spara och avsluta</button>
    </section>
  );
}
