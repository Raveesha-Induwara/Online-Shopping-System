import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  //   <StrictMode>
  //     <App />
  //   </StrictMode>,
  <BrowserRouter>
    {" "}
    {/* Wrap your app in BrowserRouter */}
    <App />
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     {" "}
//     {/* Wrap your app in BrowserRouter */}
//     <App />
//   </BrowserRouter>
// );
