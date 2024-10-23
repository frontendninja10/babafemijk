"use client";
import React, { useState } from "react";

const questions = [
  {
    question: "What is state in React?",
    options: [
      "A way for components to remember things",
      "A method to style components",
      "A lifecycle method",
      "None of the above",
    ],
    answer: "A way for components to remember things",
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: "useState",
  },
  {
    question: "What does the setBalance function do?",
    options: [
      "It retrieves the balance",
      "It updates the balance state",
      "It resets the balance",
      "It displays the balance",
    ],
    answer: "It updates the balance state",
  },
  {
    question: "What happens when the state of a component changes?",
    options: [
      "The component is destroyed",
      "The component re-renders to reflect the new state",
      "The component's props are updated",
      "Nothing happens",
    ],
    answer: "The component re-renders to reflect the new state",
  },
  {
    question: "Can all React components have state?",
    options: [
      "Yes",
      "No",
      "Only class components",
      "Only functional components",
    ],
    answer: "Yes",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      {showScore ? (
        <div className="score-section text-center text-lg font-semibold text-gray-700">
          You scored {score} out of {questions.length}
          {score === questions.length && " 🎉"}
          <button
            className="mt-4 w-full p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            onClick={handleRestartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section text-[#212A37]">
          <div className="question text-xl font-bold mb-4">
            {questions[currentQuestion].question}
          </div>
          <div className="options space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button w-full p-2 rounded-md border border-gray-300 transition-colors duration-200 
                  ${selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button mt-4 w-full p-2 rounded-md bg-[#212A37] text-white cursor-pointer transition-colors duration-200"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
