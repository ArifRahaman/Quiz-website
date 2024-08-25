/* eslint-disable react/prop-types */
const Question = ({ question, onAnswerClick = () => {} }) => {
    return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h2>
        <ul className="space-y-2">
          {question.answerOptions.map((option) => (
            <li key={option.text} className="w-full flex justify-center">
              <button
                onClick={() => onAnswerClick(option.isCorrect)}
                className="w-1/2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Question;
  