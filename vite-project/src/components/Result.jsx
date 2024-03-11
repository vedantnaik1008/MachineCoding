/* eslint-disable react/prop-types */

const Result = ({ userAnswers, question, resetQuiz = () => {} }) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;

    return (
        <div className='results'>
            <h2>Results</h2>
            <p>
                You answered {correctAnswers} out of {question.length}{' '}
                questions <span onClick={resetQuiz}>Click here to Retry</span>
            </p>
            <ul>
                {question.map((question, index) => {
                    return (
                        <li key={index} data-correct={userAnswers[index]}>
                            Q{index + 1}. {question.question}
                            <b>
                                {userAnswers[index]
                                    ? ''
                                    : `- ${
                                          question.answerOptions.find(
                                              (ans) => ans.isCorrect
                                          ).text
                                      }`}
                            </b>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Result;
