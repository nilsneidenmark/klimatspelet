// hanterar frågorna individuellt, visar endast en fråga i taget

import styles from "./question.module.scss";

// props, tar emot data från "send to question"
const Question = (props) => {

    const data = props.data;

    // conditional rendering and error handler
    if(data === undefined) return <p>No data found</p>

    //const currentQuestion = data;

    return (
        <section>
            <div className={styles.question} >
            {/* 
                <p>{currentQuestion.question}</p>

                {currentQuestion.all_answers.map((answer)=>(
                    <div className={styles.alternatives}>
                    <button>{Alternativ}</button>
                </div>
                ))}
            */}
                
            </div>
        </section>
    );
}

export default Question;