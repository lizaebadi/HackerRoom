import CodeEditor from '../codeMirror/codeMirror.js';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


function WallServer() {
  const navigate = useNavigate();
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
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
    <div>
      <CodeEditor />
    </div>
  )
}
export default WallServer;
