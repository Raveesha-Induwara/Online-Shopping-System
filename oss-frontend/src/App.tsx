import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { NavBar } from "./Components/NavBar";
import { PrimaryButton } from "./Components/PrimaryButton";
import { ProductDetailsCard } from "./Components/ProductDetailsCard.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* {" "}
      <NavBar />{" "} */}
      {/* <PrimaryButton title="submit" /> */}
      <ProductDetailsCard
        title="Slate Maxi - Gown"
        price="LKR 6000"
        description="new frock"
        rating={3}
      />
    </div>
  );
}

export default App;
