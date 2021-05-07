import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 10;
  const [text, setText] = useState("");
  const [timeRemaining, settimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [words, setWords] = useState(0);
  const textInputRef = useRef(null)

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  function wordCount(text) {
    const wordArray = text.trim().split(" ");
    return wordArray.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    settimeRemaining(STARTING_TIME);
    setText("");
    setWords(0);
    textInputRef.current.disabled = false
    textInputRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false);
    setWords(wordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        settimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textInputRef}
      />
      <h4>Time reminaing: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {words}</h1>
    </>
  );
}

export default App;
