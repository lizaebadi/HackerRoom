import { useState } from "react";
import '@uiw/codemirror-theme-sublime'
import CodeMirror from '@uiw/react-codemirror';
import Editor from "./editor/editor";

function CodeEditor() {
  const [code, setCode] = useState("");

  const options = {
    theme: 'dracula',
    mode: "ruby",
  }

  return (
    <div>
      <CodeMirror
        value={code}
        options={options}
        onChange={(editor, viewUpdate) => {setCode(code); console.log("value:", editor);}}
      />

      <div className="top-pane">
        <Editor />
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