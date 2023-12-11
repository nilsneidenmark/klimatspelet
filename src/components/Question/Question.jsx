// hanterar frågorna individuellt, visar endast en fråga i taget

import styles from "./question.module.scss";

// props, tar emot data från "send to question"
const Question = (props) =>{

    const data = props.data;

    // conditional rendering and error handler
    //if(data === undefined) return <p>No data found</p>

    const currentQuestion = data;

    return (
        <section>
            <div className={styles.question} >
                <p>API bugg, men här kommer frågan + alternativen, se kommentar i koden // LIP</p>

                {/* 
                <p>{currentQuestion.question}</p>

                {currentQuestion.incorrect_answers.map((answer)=>(
                    <div className={styles.alternatives}>
                    <button>{answer}</button>
                </div>
                ))}
                
                */}
            </div>
            <p>Spara och avsluta</p>
        </section>
    );
}

export default Question;