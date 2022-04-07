import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = ({ input }) => {
  const [quiz, setQuiz] = useState([]);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await axios(`https://opentdb.com/api.php?amount=20`);
      setQuiz(questions.data.results);
    };
    getQuestions();
    console.log(quiz);
  }, []);

  return (
    <div>
      {quiz.map((data) => (
        <div key={Math.random() * 100000} className="quiz">
          {console.log(data)}
          <p className="quiz-ques">{data.question}</p>
          <div className="quiz-options">
            <button
              value={data.incorrect_answers[0]}
              className={`${answer}?"correct":"incorrect"`}
            >
              {data.incorrect_answers[0]}
            </button>

            <button
              value={data.incorrect_answers[1]}
              className={`${answer}?"correct":"incorrect"`}
            >
              {data.incorrect_answers[1]}
            </button>

            <button
              value={data.correct_answer}
              className={`${answer}?"correct":"incorrect"`}
            >
              {data.correct_answer}
            </button>

            <button
              value={data.incorrect_answers[2]}
              className={`${answer}?"correct":"incorrect"`}
            >
              {data.incorrect_answers[2]}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
