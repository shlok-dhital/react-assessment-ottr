import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

const App = () => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleChangeCount = (changeNum) => {
    setCurrentCount(currentCount + changeNum);
  };

  return (
    <div className="App">
      <h1>{currentCount}</h1>
      <Child handleChangeCount={handleChangeCount} />
      {currentCount < 0 && <p>Why so negative?</p>}
    </div>
  );
};

export default App;
