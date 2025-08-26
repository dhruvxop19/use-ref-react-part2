import { useRef } from "react"

function App() {

  const inputRef = useRef();

  function focusOnInput() {

    inputRef.current.focus();
    // document.getElementById("name").focus()
  }
  return <div>
    Sign Up
    <input ref={inputRef} type="text" ></input>
    <input type="text" ></input>
    <button onClick={focusOnInput}>Submit</button>
  </div>
}

export default App
