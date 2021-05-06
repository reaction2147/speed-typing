import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function wordCount(text) {
    const wordArray = text.trim().split(" ");
    return wordArray.filter(word => word !== "").length
    
  }
  

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time reminaing: ???</h4>
      <button onClick={() => wordCount(text)}>Start</button>
      <h1>Word count: ???</h1>
    </>
  );
}

export default App;
