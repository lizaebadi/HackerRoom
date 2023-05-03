import React from 'react';
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';

export default function Editor(props){
  const {
    value, 
    onChange
  } = props

  function handleChange(editor, data, value){
    onChange(value)
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
        Python 3
      </div>
      <CodeMirror
        className='code-mirror-wrapper'
        value="// code here"
        height="300px"
        width="900px"
        theme={okaidia}
        extensions={[python()]}
        onChange={handleChange}
      />
      
    </div>
  )
}