import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./Components/AppLayout";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="OuterDiv">
        <AppLayout />
        <footer className="footer">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
