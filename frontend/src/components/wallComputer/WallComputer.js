import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./WallComputer.css";


function WallComputer() {
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
      setMessage("Not quite, try again!");
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
      question: "What is the syntax for declaring a variable in Python?",
      codeImage: null,
      answers: ["var = 10", "variable 10", "int var = 10", "var := 10"],
      correctAnswer: 0,
    },
  ]

  return (
    <div ref={divRef} tabIndex="0">
      {page === "intro" && (
        <div className='wallComputerBackground'>
        <div className='wallComputerBox'>
          <h1 className='wallComputer-heading' data-cy="wallComputer-heading">Hello World</h1>
          <p id='wallComputer-body' data-cy="introduction">
            To start, we'll be going back to the basics with the classic 'Hello,
            World!' program. But this time, we'll be introducing a whole new
            world - one that the Fakers are determined to exploit. It's up to
            you to stop them, one line of code at a time.
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
          <button onClick={submitAnswer}>Submit</button>
          <p className="exit">Press Esc to exit</p>
          {message && <p className="message">{message}</p>}
        </div>
      )}
      {page === "outro" && (
        <div className='wallComputerBackground'>
          <div className='wallComputerBox'>
          <h1 className='wallComputer-heading' data-cy="outro-heading">Congratulations!</h1>
          <p id='outro-body' data-cy="outro-body">
            Head over to the blue desk to explore Variables and Statements
          </p>
          <p className='exit'>Press Esc to exit</p>
          <p className='continue'>Press SPACE to continue! ⚔️</p>
        </div>
        </div>
      )}
    </div>
  );};

export default WallComputer;
