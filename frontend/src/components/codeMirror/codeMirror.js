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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
    `<html>
      <body>${code}</body>
    </html>`
      )
    }, 250)

    return () => clearTimeout(timeout)
  }, [code])
  
  
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
    </div>
  );
}

export default CodeEditor;