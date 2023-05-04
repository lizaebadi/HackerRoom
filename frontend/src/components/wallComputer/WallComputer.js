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
    {
      question: "What is Python syntax for creating a variable and assigning the number 10 to it?" ,
      codeImage: null,
      answers: ["variable_name == 10", "new variable_name = 10", "def variable_name = 10", "variable_name = 10"],
      correctAnswer: 3,
    },
    {
      question: "What is the value of total_cost that gets printed?" ,
      codeImage: require("./question1.png"),
      answers: ["5", "15", "10", "50"],
      correctAnswer: 1,
    },
    {
      question: "Which function outputs text to the terminal?" ,
      codeImage: null,
      answers: ["output()", "write()", "type()", "print()"],
      correctAnswer: 3,
    },
    {
      question: "Which of the following will produce a SyntaxError?" ,
      codeImage: null,
      answers: ["answer = is_this_an_error", "answer = \"Is this an error\"", "answer = \"Is this an error\'", "answer = \"This is not an error\""],
      correctAnswer: 2,
    },
  ]

  return (
    <div ref={divRef} tabIndex="0">
      {page === "intro" && (
        <div className='wallComputerBackground'>
        <div className='wallComputerBox'>
          <h1 className='wallComputer-heading' data-cy="wallComputer-heading">Hello World</h1>
          <p id='wallComputer-body' data-cy="introduction">
            
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
