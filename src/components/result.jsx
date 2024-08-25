/* eslint-disable react/prop-types */

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results</h2>
        <p className="text-gray-700 mb-4">
          You answered <span className="font-semibold text-blue-600">{correctAnswers}</span> out of <span className="font-semibold text-blue-600">{questions.length}</span> questions
          {" "}
          <span
            onClick={resetQuiz}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Click here to Retry
          </span>
        </p>
        <ul className="space-y-2">
          {questions.map((question, index) => (
            <li
              key={index}
              className={`p-4 border rounded-lg ${userAnswers[index] ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'}`}
            >
              <span className="font-semibold text-gray-800">Q{index + 1}:</span> {question.question}
              <b className="block mt-2">
                {!userAnswers[index] && (
                  `- ${question.answerOptions.find((ans) => ans.isCorrect).text}`
                )}
              </b>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Result;
  