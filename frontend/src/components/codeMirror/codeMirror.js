import React, { useState } from "react";
import '@uiw/codemirror-theme-sublime'
import './codeMirror.css'
// import CodeMirror from '@uiw/react-codemirror';
import Editor from "./editor/editor";

function CodeEditor() {
  const [code, setCode] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

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
        // If there is an error, display the error message
        setSrcDoc(`
          <html>
            <body>${data.error}: ${data.message}</body>
          </html>
        `);
      } else {
        // Otherwise, display the Python output
        setSrcDoc(`
          <html>
            <body>${data.results}</body>
          </html>
        `);
      }
    });
  }
  
  return (
    <div className="parent">
      <div className="top-pane">
        <Editor 
          code={code}
          onChange={onChange}
        />
      </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      <button className="submit-button" onClick={submitPython}><p className="button-title">Submit</p></button>
    </div>
  );
}

export default CodeEditor;