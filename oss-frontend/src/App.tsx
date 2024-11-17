import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { PrimaryButton } from "./Components/PrimaryButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* {" "}
      <NavBar />{" "} */}
      <PrimaryButton title="submit" />
    </div>
  );
}

export default App;
