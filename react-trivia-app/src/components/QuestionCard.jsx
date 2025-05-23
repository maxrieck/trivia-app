import { useState, useEffect } from 'react';
import styles from './QuestionCard.module.css';

const QuestionCard = ({ question, userName }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [answers, setAnswers] = useState([]);

    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    // shuffles answers so they are radnomly displayed and theh coorect answer is not always in the same position
    useEffect(() => {
        function shuffleAnswers() {
            const arr = [...question.incorrect_answers, question.correct_answer];
            const decodedArr = arr.map(decodeHtml);
            return decodedArr.sort(() => Math.random() - 0.5);
        }
        setAnswers(shuffleAnswers());
    }, [question]);


    useEffect(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
    }, [question]);


    if (!question) return null;
    
    //compares the selected answer to the correct answer and returns custom message. Messsage is sent to
    // p element in the selectedAnswer && condition
    function handleAnswerClick(answer) {
        setSelectedAnswer(answer);
        answer === decodeHtml(question.correct_answer)
            ? setIsCorrect(`Good job ${userName}!`)
            : setIsCorrect(`Sorry, ${userName}, try again.`);
    }

    return (
        <div className={styles.questionCard}>
            <h2>Category: {decodeHtml(question.category)}</h2>
            <p>{decodeHtml(question.question)}</p>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index} onClick={() => handleAnswerClick(answer)}
                        style={{
                            backgroundColor: selectedAnswer === answer
                                ? (answer === question.correct_answer
                                    ? '#90ee90'
                                    : '#ffb3b3')
                                : 'white',
                            cursor: 'pointer',
                            padding: '10px',
                            margin: '5px 0',
                        }}
                    >{decodeHtml(answer)}</li>
                ))}
            </ul>
            {selectedAnswer && <p style={{
                backgroundColor: 'white',
                color: 'black',
                width: '50%',
                padding: '3px',
                margin: '10px auto',
                borderRadius: '5px',
            }}>{isCorrect}</p>}
        </div>
    )
}

export default QuestionCard;