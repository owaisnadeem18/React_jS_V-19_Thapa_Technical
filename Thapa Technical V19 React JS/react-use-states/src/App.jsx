import { useState } from "react";

import "./App.css";
import Parent from "./Components/Parent";

function App() {
  const [count, setCount] = useState(0);

  const incrementFunction = () => {
    setCount((value) => value + 1); // pichli value pay new value depend kar rhi thi , that's why we are able to use call back in use state function
  };

  return (
    <>
      {/* <div className="container">
        <h2>Count = {count}</h2>
        <button onClick={incrementFunction}>Increase Count</button>
      </div> */}

      <Parent owais={count} func={incrementFunction} />
    </>
  );
}

export default App;
