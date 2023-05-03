import React, { useState } from "react";
import '@uiw/codemirror-theme-sublime'
import CodeMirror from '@uiw/react-codemirror';
import Editor from "./editor/editor";

function CodeEditor() {
  const [python, setPython] = useState("")
  return (
    <div>
      <div className="top-pane">
        <Editor 
          value={python}
          onChange={setPython}
        />
      </div>

      <div className="pane">
        <iframe 
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