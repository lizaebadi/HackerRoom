import React, {useState, useEffect} from "react";
import MrkDwn from 'markdown-to-jsx';

export default function MarkDown(props) {
  const { filename } = props;
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filename)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  }, [filename]);

  return (
    <div><MrkDwn>{content}</MrkDwn></div>
  )
}