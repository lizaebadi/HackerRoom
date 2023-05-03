import React, { useState } from "react";
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import "../codeMirror.css"
import { okaidia } from '@uiw/codemirror-theme-okaidia';


export default function Editor(props){

  const {
    code,
    onChange
  } = props
  // const [code, setCode] = useState("")

  // const onChange = React.useCallback((value, viewUpdate) => {
  //   setCode(value)
  // }, []);

  return (
    <div className="editor-container">
      <div className="editor-title">
        Python 3
      </div>
      <CodeMirror
        className='code-mirror-wrapper'
        value={code}
        height="300px"
        theme={okaidia}
        extensions={[python(), EditorView.lineWrapping]}
        onChange={onChange}
      />
      
    </div>
  )
}