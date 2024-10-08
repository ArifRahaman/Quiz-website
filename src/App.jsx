
import { useState } from 'react';

import Question from "./components/question";
import Result from "./components/result";
import quitionsonos from "./constants/questionsonos.json";
 import worldQuestions from "./constants/questions.json"; // Assuming you have a separate JSON file for World Quiz questions

 function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState('os');

  const questions = selectedQuiz === 'os' ? quitionsonos : worldQuestions;

  const handleNextQuestion = (isCorrect) => {
    setUserAnswers([...userAnswers, isCorrect]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const handleQuizSelection = (event) => {
    // setSelectedQuiz(event.target.value);
    resetQuiz();
  };
const getQuiz = ()=>{
  if(selectedQuiz==='os'){
    return 'OS Quiz';
  }else{
    return "World Quiz";
  }
}
  console.log("Current Question: ", currentQuestion);
  console.log("Total Questions: ", questions.length);
  console.log("User Answers: ", userAnswers);

  return (
    <div className="App bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      {/* <h1>{selectedQuiz === 'os' ? 'OS Quiz' : 'World Quiz'}</h1> */}
      <h2 className="text-3xl font-bold mb-6 text-blue-800">{getQuiz()}</h2>
      
      <div className="mb-8 w-full max-w-xs">
        <select
          value={selectedQuiz}
          onChange={(e) => setSelectedQuiz(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
        >
          <option value="os" className="bg-blue-50">OS Quiz</option>
          <option value="world" className="bg-blue-50">World Quiz</option>
        </select>
      </div>
  
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
          className="mb-8 w-full max-w-md bg-white p-4 border border-gray-200 rounded-lg shadow-md"
        />
      )}
  
      {currentQuestion === questions.length - 1 && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
          className="mt-8 w-full max-w-md bg-white p-4 border border-gray-200 rounded-lg shadow-md"
        />
      )}
    </div>
  );
}


export default App;
