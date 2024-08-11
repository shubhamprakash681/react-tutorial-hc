import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState<number>(0);

  const addValue = () => {
    if (value === 20) {
      alert("Cannot increase further");
      return;
    }
    setValue(value + 1);
  };

  const removeValue = () => {
    if (value === 0) {
      alert("Cannot decrease further");
      return;
    }
    setValue(value - 1);
  };

  return (
    <>
      <h1>Counter Value: {value}</h1>

      <div className="btn-container">
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
      </div>
    </>
  );
}

export default App;
