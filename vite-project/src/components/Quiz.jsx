import { useState } from 'react';
import Question from '../components/Question';
import question from '../constants/QuizData.json';
import Result from '../components/Result';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    // Keep all of the logic in App.jsx

    const handleNextQuestion = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswers([...userAnswers, isCorrect]);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
    };

    return (
        <div className='App'>
            <h1>World Quiz</h1>

            {/* Questions Component */}
            {currentQuestion < question.length && (
                <Question
                    question={question[currentQuestion]}
                    onAnswerClick={handleNextQuestion}
                />
            )}

            {/* Result Component */}
            {currentQuestion === question.length && (
                <Result
                    userAnswers={userAnswers}
                    question={question}
                    resetQuiz={resetQuiz}
                />
            )}
        </div>
    );
}

export default Quiz;
