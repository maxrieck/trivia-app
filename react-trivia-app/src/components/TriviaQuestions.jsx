import { useState } from 'react';
import styles from './TriviaQuestion.module.css';
import QuestionCard from './QuestionCard';
import TriviaTheme from './TriviaTheme';

function TriviaQuestion({ setPageTheme }) {

    const [question, setQuestion] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [questionDifficulty, setQuestionDifficulty] = useState("");
    const [questionCategory, setQuestionCategory] = useState("");
    const [userName, setUserName] = useState("");

    // Takes value from the seleted difficulty plug it into the api call
    const handleDifficultyChange = event => {
        setQuestionDifficulty(event.target.value)
    };
    // Takes value from the seleted category plug it into the api call
    const handleCategoryChange = event => {
        setQuestionCategory(event.target.value)
    };

    const handleUserName = event => {
        setUserName(event.target.value);
    };

    async function fetchTrivia() {
        setLoading(true);
        setError(null);

        try {
            // Simulate a delay to show loading state
            await new Promise(resolve => setTimeout(resolve, 800));

            const apiUrl = `https://opentdb.com/api.php?amount=10&category=${questionCategory}&difficulty=${questionDifficulty}&type=multiple`

            // Fetch trivia question from the API
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const triviaData = await response.json();

            setQuestions(triviaData.results);
            setCurrentIndex(0);
            setQuestion(triviaData.results[0]);

        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    function handleNextQuestion() {
        if (questions && currentIndex < questions.length - 1) {
            setCurrentIndex(idx => {
                setQuestion(questions[idx + 1]);
                return idx + 1;
            });
        }
    }
    
    // Resets all the states to their initial values. Function runs when the user clicks the "New Quiz" button.
    function handleReset() {
        setQuestion(null);
        setQuestions(null);
        setCurrentIndex(0);
        setLoading(false);
        setError(null);
        setQuestionDifficulty("");
        setQuestionCategory("");
        setUserName("");
        setPageTheme({ backgroundColor: "white", color: "black" });
    }


    return (
        <div className={styles.triviaContainer}>
            {!question && (
                <form onSubmit={event => {
                    event.preventDefault();
                    fetchTrivia();

                }}>
                    <h1>Trivia Quiz</h1>

                    <input type="text" placeholder='Your Name' value={userName} onChange={handleUserName} required />
                    <br />

                    <div className={styles.selectLabels}>
                    <label for="category">Select Category</label>
                    <label for="questionDifficulty">Select Difficulty</label>
                    </div>
                  
                    {/* // select options for categories. Decided to narrow it down to 5 categories so it 
                    // was easier to set up custom themes for each one*/}
                    <select id="category" value={questionCategory} onChange={handleCategoryChange}>
                        <option value="" >Random</option>
                        <option value="10" >Books</option>
                        <option value="11" >Movies</option>
                        <option value="14" >Television</option>
                        <option value="15" >Video Games</option>
                    </select>
                    

                    <select  id="questionDifficulty" value={questionDifficulty} onChange={handleDifficultyChange}>
                        <option value="" >All</option>
                        <option value="easy" >Easy</option>
                        <option value="medium" >Medium</option>
                        <option value="hard" >Hard</option>
                    </select>

                    <button type="submit" disabled={!userName}>
                        Start Quiz
                    </button>

                    <br />

                    

                </form>
            )}

            {loading && <p>Loading Trivia!</p>}
            {error && <p>Error: {error.message}</p>}

            {question && !loading && !error && (
                <form onSubmit={event => {
                    event.preventDefault();
                }}>
                    <TriviaTheme questionCategory={questionCategory} setPageTheme={setPageTheme} />
                    <QuestionCard question={question} userName={userName} />
                    <button
                        onClick={handleNextQuestion}
                        disabled={!questions || currentIndex >= questions.length - 1}
                    >Next Question
                    </button>

                    <br />

                    <button onClick={handleReset}>
                        New Quiz
                    </button>
                </form>
            )}
        </div>
    );
}

export default TriviaQuestion;
