import React from 'react';
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';
export default function Editor(){
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <div className="editor-container">
      <div className="editor-title">
        Python 3
      </div>
      <CodeMirror
        className='code-mirror-wrapper'
        value="// code here"
        height="200px"
        extensions={[python()]}
        onChange={onChange}
      />
      
    </div>
  )
}