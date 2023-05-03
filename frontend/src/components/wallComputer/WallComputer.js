import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./WallComputer.css";

function WallComputer() {
  const [page, setPage] = useState("intro");
  const divRef = useRef(null);
  const navigate = useNavigate();

  function handleKeyDown(event) {

    if (event.code === "Space") {
      if (page === "intro") {
        setPage("challenge");
      } else if (page === "challenge") {
        // it should also check whether the callenge is complete before taking you to outro
        setPage("outro");
      } else {
        navigate('/game');
      }
    } else if (event.code === 'Escape') {
      navigate('/game');
    }
  }

  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  });

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
        <div className='wallComputerBackground'>
          <h1 data-cy="challenge-instructions">
            A simple challenge that requires the user to enter code that outputs
            the Hello World string
          </h1>
          <p data-cy="main-challenge">This is the main challenge.</p>
          <p>Hit esc to exit</p>
          <p>Hit spacebar to continue</p>
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
