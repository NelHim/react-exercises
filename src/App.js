import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="h-screen grid justify-center items-center">
      <div className="text-center">
        <p className="mb-5">Button has been clicked: {count}</p>
        <Button incrementCount={handleClick}/>
      </div>
      
    </div>
  );
}

export default App;
