import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Desk.css";


function Desk() {
  const [page, setPage] = useState("intro");
  const divRef = useRef(null);
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [message, setMessage] = useState('');

  function submitAnswer() {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      // answer is correct
      setMessage("Correct!");
      if (currentQuestion === questions.length - 1) {
        setPage("outro");
      } else {
        // takes you to the next question
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeout(() => setMessage(''), 3000); // hide message after 3 seconds
      }
    } else {
      // answer is incorrect
      setMessage("That's not the correct answer. Keep trying!");
      setTimeout(() => setMessage(''), 3000); // hide message after 3 seconds
    }
  }

  function handleKeyDown(event) {
    if (event.code === "Space") {
      if (page === "intro") {
        setPage("challenge");
      } else if (page === "outro") {
        navigate("/game");  
      }
    } else if (event.code === "Escape") {
      navigate("/game");
    }
  }

  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  });

  const questions = [
    {
      question: "Determine the truth value of the following expression:",
      codeImage: require("./question2.png"),
      answers: ["True", "False"],
      correctAnswer: 0,
    },
    {
      question: "Determine the truth value of the following expression:",
      codeImage: require("./question3.png"),
      answers: ["True", "False"],
      correctAnswer: 0,
    },
    {
      question: "Determine the truth value of the following expression:",
      codeImage: require("./question5.png"),
      answers: ["True", "False"],
      correctAnswer: 1,
    },
    {
      question: "Read the following code carefully. What will happen when the code is executed?",
      codeImage: require("./question4.png"),
      answers: ["\"x is equal to zero\" will print to the terminal", "There will be a SyntaxError", "\"x is greater than zero\" will print to the terminal", "\"x is equal to zero\" and \"x is greater than zero\" will print to the terminal"],
      correctAnswer: 1,
    },
    {
      question: "Which of the following variables contains a Boolean value?",
      codeImage: null,
      answers: ["my_fun_variable = 2 + 9", "my_chill_variable = \"This is True.\"", "my_cool_variable = 7 + 8 != 13", "my_super_variable = \"True\" + \"False\""],
      correctAnswer: 2,
    },
  ]

  return (
    <div ref={divRef} tabIndex="0">
      {page === "intro" && (
        <div className='wallComputerBackground'>
        <div className='wallComputerBox'>
          <h1 className='wallComputer-heading'>Control Flow</h1>
          <p id='wallComputer-body' data-cy="introduction">
            Are you ready for the quiz?
          </p>
          <p className='exit'>Press Esc to exit</p>
          <p className='continue'>Press SPACE to continue! ⚔️</p>
        </div>
        </div>
      )}
      {page === "challenge" && (
        <div className="wallComputerBackground">
          <div id="question-box" key={currentQuestion}>
            <h2 id="current-question">{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].codeImage && <img id='code-image' src={questions[currentQuestion].codeImage} alt="code" />}
            {questions[currentQuestion].answers.map((answer, answerIndex) => (
              <div className="answer" key={answerIndex}>
                <div
                  className="container"
                  onClick={() => setSelectedAnswer(answerIndex)}
                >
                  <div className="checkbox">
                    {selectedAnswer === answerIndex && (
                      <div className="checked"></div>
                    )}
                  </div>
                  <div className="label">{answer}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="wallCompButton" onClick={submitAnswer}>Submit</button>
          <p className="exit">Press Esc to exit</p>
          {message && <p className="message">{message}</p>}
        </div>
      )}
      {page === "outro" && (
        <div className='wallComputerBackground'>
          <div className='wallComputerBox'>
          <h1 className='wallComputer-heading' data-cy="outro-heading">Congratulations!</h1>
          <p id='outro-body' data-cy="outro-body">
            Check out the grey server and discover the power of Lists
          </p>
          <p className='exit'>Press Esc to exit</p>
          <p className='continue'>Press SPACE to continue! ⚔️</p>
        </div>
        </div>
      )}
    </div>
  );};

export default Desk;
