import React, { useState } from "react";
import '@uiw/codemirror-theme-sublime'
// import CodeMirror from '@uiw/react-codemirror';
import Editor from "./editor/editor";

function CodeEditor() {


  
  return (
    <div>
      <div className="top-pane">
        <Editor />
      </div>

      <div className="pane">
        <iframe 
          // srcDoc={srcDoc}
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