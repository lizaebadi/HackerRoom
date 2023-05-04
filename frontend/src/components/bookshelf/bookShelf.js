import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './bookShelf.css'
import MarkDown from "./markdownToJsx";
import helloWorld from "./helloWorld.md"
import controlFlow from "./controlFlow.md"
import lists from "./lists.md"
import loops from "./loops.md"
export default function Bookshelf() {
  const [page, setPage] = useState("helloWorld");
  const navigate = useNavigate();
 

  function handleKeyDown(event) {
    if (event.code === "Space") {
      if (page === "helloWorld") {
        setPage("controlFlow");
      } else if (page === "controlFlow") {
        setPage("lists");
      } else if (page === "lists") {
        setPage("loops");
      } else if (page === "outro") {
        navigate("/game");  
      }
    }
    if (event.code === "Escape") {
      navigate("/game");
    }
}


  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  });

  return (
    <div className="outer">
      {page === "helloWorld" && (
    <div className="hello">
      <MarkDown filename={helloWorld} />
    </div>
      )} 
      {page === "controlFlow" && (
        <div className="control">
          <MarkDown filename={controlFlow} />
        </div>
      )} 

      {page === "lists" && (
        <div className="list">
          <MarkDown filename={lists} />
        </div>
      )} 

      {page === "loops" && (
        <div className="loop">
          <MarkDown filename={loops} />
        </div>
      )} 
      </div>
  )};
      