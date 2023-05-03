import React, { useEffect, useState } from "react";
import '@uiw/codemirror-theme-sublime'
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
    .then(data => setSrcDoc(`<html>
    <body>${data.results}</body>
  </html>`))

    
  }
  
  

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setSrcDoc(
    // `<html>
    //   <body>${code}</body>
    // </html>`
  //     )
  //   }, 250)

  //   return () => clearTimeout(timeout)
  // }, [code])
  
  
  return (
    <div>
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
          sandBox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
      <button className="submit-button" onClick={submitPython}>Submit</button>
    </div>
  );
}

export default CodeEditor;