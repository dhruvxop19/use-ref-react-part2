import { useRef, useState } from "react"

function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock() {
    let value = setInterval(function () {
      setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
    timer.current = null

  }


  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start Clock</button>
    <button onClick={stopClock}>Stop Clock</button>
  </div>
}


export default App
