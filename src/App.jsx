import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hacktoberfest 2023</h1>

      <p className="read-the-docs">
        Welcome to Hacktoberfest 2023, Happy Hacking
      </p>
    </>
  );
}

export default App;
