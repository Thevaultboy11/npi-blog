import React, { useState } from "react";

const QuizQuestion = ({ question1, answer1, question2, answer2 }) => {
  const [userAnswer1, setUserAnswer1] = useState("");
  const [userAnswer2, setUserAnswer2] = useState("");
  const [feedback1, setFeedback1] = useState("");
  const [feedback2, setFeedback2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user's answers are correct and provide feedback
    setFeedback1(
      userAnswer1.toLowerCase() === answer1.toLowerCase() ? "success" : "error"
    );
    setFeedback2(
      userAnswer2.toLowerCase() === answer2.toLowerCase() ? "success" : "error"
    );
  };

  return (
    <div className="max-w-7xl mx-auto w-full my-8 p-6 bg-paper border rounded-xl shadow-xl">
      <form id="myForm" onSubmit={handleSubmit}>
        <div className={`mb-6 ${feedback1}`}>
          <label
            htmlFor="question1"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
          >
            {question1}
          </label>
          <input
            type="text"
            id="question1"
            className={`p-8 text-gray-900 placeholder-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400`}
            placeholder="Enter your answer"
            value={userAnswer1}
            onChange={(e) => setUserAnswer1(e.target.value)}
          />
          <p
            id="feedback1"
            className={`mt-2 text-sm ${
              feedback1 === "success" ? "text-green-500" : "text-red-500"
            } dark:text-gray-500`}
          >
            {feedback1 === "success" ? "Correct!" : "Incorrect! Try again."}
          </p>
        </div>

        <div className={`mb-6 ${feedback2}`}>
          <label
            htmlFor="question2"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-500"
          >
            {question2}
          </label>
          <input
            type="text"
            id="question2"
            className={`p-8 text-gray-900 placeholder-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400`}
            placeholder="Enter your answer"
            value={userAnswer2}
            onChange={(e) => setUserAnswer2(e.target.value)}
          />
          <p
            id="feedback2"
            className={`mt-2 text-sm ${
              feedback2 === "success" ? "text-green-500" : "text-red-500"
            } dark:text-gray-500`}
          >
            {feedback2 === "success" ? "Correct!" : "Incorrect! Try again."}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizQuestion;
