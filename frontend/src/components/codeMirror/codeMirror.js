import React, { useState } from "react";
import '@uiw/codemirror-theme-sublime'
import './codeMirror.css'
// import CodeMirror from '@uiw/react-codemirror';
import Editor from "./editor/editor";

function CodeEditor() {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")


  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value)
  }, []);

  const submitPython = () => {
    fetch( '/python', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: code })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setOutput(`${data.error}: ${data.message}`);
      } else {
        setOutput(data.results);
      }
    });
  }
  
  return (
    <div className="background">
      <h2 className="header">Practice Room</h2>
    <div className="parent">
      <div className="top-pane">
        <Editor 
          code={code}
          onChange={onChange}
        />
      </div>
      <div className="pane">
        <div className="pane-title">Output</div>
        <div className="output">{output}</div>
      </div>
    </div>
    <button className="submit-button" onClick={submitPython}>Run &gt;&gt;</button>
    </div>
  );
}

export default CodeEditor;