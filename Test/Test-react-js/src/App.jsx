import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click</button>
    </>
  );
};

export default App;
