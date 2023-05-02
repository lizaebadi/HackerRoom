import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function WallComputer() {
  const [page, setPage] = useState("intro");
  const divRef = useRef(null);
  const navigate = useNavigate();

  function handleKeyDown(event) {
    console.log("handleKeyDown called");

    if (event.code === "Space") {
      if (page === "intro") {
        setPage("challenge");
      } else if (page === "challenge") {
        // it should also check whether the callenge is complete before taking you to outro
        setPage("outro");
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
        <div>
          <h1 data-cy="wallComputer-heading">Hello World</h1>
          <p data-cy="introduction">
            To start, we'll be going back to the basics with the classic 'Hello,
            World!' program. But this time, we'll be introducing a whole new
            world - one that the Fakers are determined to exploit. It's up to
            you to stop them, one line of code at a time.
          </p>
          <p>Hit esc to exit</p>
          <p>Hit spacebar to continue</p>
        </div>
      )}
      {page === "challenge" && (
        <div>
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
        <div>
          <h1 data-cy="outro-heading">Congratulations!</h1>
          <p data-cy="outro-body">
            (TBC) relevant clue that will lead the user to the next object that
            they need to find / interact with (TBC) Stored within an object that
            can be interacted with and shows clues earned{" "}
          </p>
          <p>Hit esc to exit</p>
          <p>Hit spacebar to continue</p>
        </div>
      )}
    </div>
 )};

export default WallComputer;
